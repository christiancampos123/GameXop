const OpenAI = require('./OpenAI')
const prompt = require('prompt')
const moment = require('moment')
const { exec } = require('child_process')
const fs = require('fs')
const currentPath = process.cwd()

const schema = {
  properties: {
    prompt: {
      description: 'Define el panel de administración que quieres crear',
      required: true
    }
  }
}

prompt.start()

prompt.get(schema, async function (err, result) {
  if (err) { return onErr(err) }

  const openAI = new OpenAI()
  const migrationTemplate = fs.readFileSync(currentPath + '/src/templates/migration.js', 'utf8')
  const modelTemplate = fs.readFileSync(currentPath + '/src/templates/model.js', 'utf8')
  const controllerTemplate = fs.readFileSync(currentPath + '/src/templates/controller.js', 'utf8')
  const routeTemplate = fs.readFileSync(currentPath + '/src/templates/route.js', 'utf8')

  let openAIprompt = `"${result.prompt}" Del texto proporcionado quiero que respondas las siguientes preguntas si es posible contestarlas:

  ¿Qué nombre de tabla quieres?
  ¿Qué campos quieres?
  ¿Qué campos quieres validar?
  ¿Con qué modelos debe relacionarse?
  ¿Qué campos debe devolver los filtros?
  ¿Cual es el nombre de la tabla en singular?
  
  Responde en ingles, con una estructura tipo json como el siguiente ejemplo:
  
  {
    "tableName":"customers",
    "tableFields":"name, surname, email, town",
    "tableValidations":"name,surname,email",
    "tableRelations":"Fingerprint, SentEmails",
    "tableFilters:"name, surname, email",
    "fileName":"customer"
  }`

  openAI.setCompletion('resourceGenerator', openAIprompt)
  let resource = await openAI.getAnswer()
  resource = JSON.parse(resource)

  openAIprompt = `Partiendo de la siguiente plantilla ${migrationTemplate} crea una migración para la tabla ${resource.tableName} con los campos id, createdAt, updatedAt, deletedAt, ${resource.tableFields}.`
  openAI.setCompletion('resourceGenerator', openAIprompt)
  const migration = await openAI.getAnswer()
  const migrationDate = moment().format('YYYYMMDDHHmmss')

  await fs.writeFile(currentPath + `/src/migrations/${migrationDate}-create-${resource.tableName}-table.js`, migration, async function (err) {
    if (err) return console.log(err)

    await exec('npx sequelize db:migrate', { cwd: './src' }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error ejecutando el comando: ${error}`)
        console.log(`Salida del comando: ${stdout}`)
        console.error(`Errores del comando: ${stderr}`)
      }
    })
  })

  openAIprompt = `Este código es un ejemplo de modelo: ${modelTemplate} . Crea un modelo siguiendo la misma estructura que el ejemplo y que tenga como campos de referencia los de la siguiente migración: ${migration}, ${resource.tableValidations ? 'además tiene que validar los siguietes campos:' + resource.tableValidations : ''} ${resource.tableRelations ? 'y tener relaciones con los siguientes modelos:' + resource.tableRelations : ''}.`
  openAI.setCompletion('resourceGenerator', openAIprompt.replace(/\s+/g, ' ').replace(/\\/g, ' '))

  const model = await openAI.getAnswer()

  fs.writeFile(currentPath + `/src/models/${resource.fileName}.js`, model, function (err) {
    if (err) return console.log(err)
  })

  openAIprompt = `Este código es un ejemplo de controlador: ${controllerTemplate} . Crea un controlador siguiendo la misma estructura que el ejemplo, con los mismos métodos, respetando los mismos espacios y saltos de línea y que interactue con el siguiente modelo: ${model}. ${resource.tableFilters ? 'Al filtrar selectFields debe devolver los siguientes campos' + resource.tableFilters : ''}.`
  openAI.setCompletion('resourceGenerator', openAIprompt.replace(/\s+/g, ' ').replace(/\\/g, ' '))

  const controller = await openAI.getAnswer()

  fs.writeFile(currentPath + `/src/controllers/admin/${resource.fileName}-controller.js`, controller, function (err) {
    if (err) return console.log(err)
  })

  openAIprompt = `Este código es un ejemplo de enrutador: ${routeTemplate} . Crea un enrutador de admin siguiendo la misma estructura y nombre de rutas que el ejemplo, el enrutador debe interactuar con los métodos del siguiente controlador: ${controller}, no incluyas su contenido en el enrutador.`
  openAI.setCompletion('resourceGenerator', openAIprompt.replace(/\s+/g, ' ').replace(/\\/g, ' '))

  const route = await openAI.getAnswer()

  fs.writeFile(currentPath + `/src/routes/admin-${resource.fileName}-routes.js`, route, function (err) {
    if (err) return console.log(err)
  })
})

function onErr (err) {
  console.log(err)
  return 1
}

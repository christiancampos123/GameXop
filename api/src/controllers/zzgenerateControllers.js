const fs = require('fs')
const readline = require('readline')
const path = require('path')

const directorio = '../models'

function leerArchivo (nombre) {
  const filePath = path.join(directorio, `${nombre}.js`) // Utiliza path.join para construir la ruta correcta
  const fileContent = fs.readFileSync(filePath, 'utf-8')

  // Encuentra las palabras clave usando expresiones regulares
  const attributeRegex = /(\w+): {\s*type:\s*DataTypes\.(\w+)/g
  const matches = fileContent.match(attributeRegex)

  // Almacena los nombres de las propiedades en un array con índice incremental
  let attributeNamesArray = []

  if (matches) {
    attributeNamesArray = matches.map((match, index) => {
      const [, attributeName] = match.match(/(\w+): {\s*type:\s*DataTypes\.(\w+)/)
      return `${attributeName}`
    })
  } else {
    console.error(`No se encontraron palabras clave en el archivo ${nombre}.`)
  }

  return attributeNamesArray
}

// Leer el contenido del directorio
fs.readdir(directorio, (err, archivos) => {
  if (err) {
    console.error('Error al leer el directorio:', err)
    return
  }

  // Filtrar solo archivos con extensión .js
  const archivosJS = archivos.filter(archivo => path.extname(archivo) === '.js')

  // Imprimir los nombres sin la extensión .js
  archivosJS.forEach(archivo => {
    const nombreSinExtension = path.parse(archivo).name
    console.log(nombreSinExtension)
    const array = leerArchivo(nombreSinExtension)

    // Usando forEach con espacio después de la coma
    let elementosForEach = ''
    array.forEach((element, index) => {
      if (index > 0) {
        elementosForEach += ', '
      }
      elementosForEach += `'${element}'`
    })

    // Usando join
    const elementosJoin = array.map(element => `'${element}'`).join(',')

    console.log('Usando forEach:', elementosForEach)
    console.log('Usando join:', elementosJoin)

    const inputString = nombreSinExtension
    const [camelCaseResult, dashSeparatedResult] = convertToCamelCaseAndDashSeparated(inputString)
    const modelName = camelCaseResult
    const controllerName = dashSeparatedResult
    // Capitaliza la primera letra del nombre proporcionado por el usuario
    // const capitalizedVariableName = capitalizeFirstLetter(variableName)

    // Genera el contenido del archivo con el nombre de la variable capitalizado
    const fileContent = `const db = require('../../models')
const ${modelName} = db.${modelName}

exports.create = (req, res) => {
  ${modelName}.create(req.body).then(data => {
    res.status(200).send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.errors || 'Algún error ha surgido al insertar el dato.'
    })
  })
}

exports.findAll = (req, res) => {
  const page = req.query.page || 1
  const limit = parseInt(req.query.size) || 10
  const offset = (page - 1) * limit

  ${modelName}.findAndCountAll({
    attributes: [${elementosForEach}],
    limit,
    offset,
    order: [['createdAt', 'DESC']]
  })
    .then(result => {
      result.meta = {
        total: result.count,
        pages: Math.ceil(result.count / limit),
        currentPage: page
      }

      res.status(200).send(result)
    }).catch(err => {
      res.status(500).send({
        message: err.errors || 'Algún error ha surgido al recuperar los datos.'
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  ${modelName}.findByPk(id).then(data => {
    if (data) {
      res.status(200).send(data)
    } else {
      res.status(404).send({
        message: \`No se puede encontrar el elemento con la id=\${id}.\`
      })
    }
  }).catch(_ => {
    res.status(500).send({
      message: 'Algún error ha surgido al recuperar la id=' + id
    })
  })
}

exports.update = (req, res) => {
  const id = req.params.id

  ${modelName}.update(req.body, {
    where: { id }
  }).then(([numberRowsAffected]) => {
    if (numberRowsAffected === 1) {
      res.status(200).send({
        message: 'El elemento ha sido actualizado correctamente.'
      })
    } else {
      res.status(404).send({
        message: \`No se puede actualizar el elemento con la id=\${id}. Tal vez no se ha encontrado el elemento o el cuerpo de la petición está vacío.\`
      })
    }
  }).catch(_ => {
    res.status(500).send({
      message: 'Algún error ha surgido al actualizar la id=' + id
    })
  })
}

exports.delete = (req, res) => {
  const id = req.params.id

  ${modelName}.destroy({
    where: { id }
  }).then(([numberRowsAffected]) => {
    if (numberRowsAffected === 1) {
      res.status(200).send({
        message: 'El elemento ha sido borrado correctamente'
      })
    } else {
      res.status(404).send({
        message: \`No se puede borrar el elemento con la id=\${id}. Tal vez no se ha encontrado el elemento.\`
      })
    }
  }).catch(_ => {
    res.status(500).send({
      message: 'Algún error ha surgido al borrar la id=' + id
    })
  })
}
`

    // Escribe el contenido en un archivo llamado 'generatedCode.js'
    fs.writeFile(`${controllerName}-controller.js`, fileContent, (err) => {
      if (err) throw err
      console.log('El archivo generatedCode.js ha sido creado correctamente.')
      rl.close()
    })
  })
})

// Función para capitalizar la primera letra
function convertToCamelCaseAndDashSeparated (inputString) {
  const firstMayus = inputString.charAt(0).toUpperCase() + inputString.slice(1)
  const camelCase = firstMayus.replace(/[-_\s]([a-z])/g, (match, letter) => letter.toUpperCase())
  const dashSeparated = camelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  return [camelCase, dashSeparated]
}

// Crea una interfaz de lectura desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Cierra la interfaz de lectura cuando se cierra la pregunta
rl.on('close', () => {
  process.exit(0)
})

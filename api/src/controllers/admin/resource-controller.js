const ResourceService = require('../../services/resource-service')
const MenuService = require('../../services/menu-service')
const db = require('../../models')
const Resource = db.Resource
const Op = db.Sequelize.Op

exports.create = async (req, res) => {

  try{
    const resourceService = new ResourceService()
    const url = await resourceService.generateUrl(req.body.tableName)
    
    const resource = await Resource.create({
      type: 'admin',
      url: url,
      name: req.body.name,
      tableName: req.body.tableName,
      tableDefinition: req.body.tableDefinition,
    })
  
    await resourceService.generateApiResources(req.body.tableName, req.body.tableDefinition)

    if(req.body.interface)
      await resourceService.generateAdminInterface(req.body.name, url, resource.id)

    if(req.body.menu){
      const menuService = new MenuService()
      await menuService.addToAdminMenu(req.body.name, url)
    }

    res.status(200).send({
      message: 'Los recursos se han generado correctamente',
    })
  }catch(err) {
    res.status(500).send({
      message: "Algún error ha surgido al generar los recursos.",
      errors: err.message
    })
  }
}

exports.findAll = (req, res) => {
  const page = req.query.page || 1
  const limit = req.query.size || 5
  const offset = (page - 1) * limit
  const whereStatement = {}

  for (const key in req.query) {
    if (req.query[key] != '' && key != 'page' && key != 'size') {
      whereStatement[key] = { [Op.substring]: req.query[key] }
    }
  }

  const condition = Object.keys(whereStatement).length > 0 ? { [Op.and]: [whereStatement] } : {}

  Resource.findAndCountAll({
    where: condition,
    limit,
    offset,
    order: [['createdAt', 'DESC']]
  }).then(result => {
    result.meta = {
      total: result.count,
      pages: Math.ceil(result.count / limit),
      currentPage: page
    }

    res.status(200).send(result)

  }).catch(err => {
    res.status(500).send({
      message: err.message || 'Algún error ha surgido al recuperar los datos.'
    })
  })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  Resource.findByPk(id, { 
    include: [
      {
        model: db.AdminResource,
        as: 'adminResources'
      }
    ]
  }).then(data => {

    if (data) {
      res.status(200).send(data)
    } else {
      res.status(404).send({
        message: `No se puede encontrar el elemento con la id=${id}.`
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: 'Algún error ha surgido al recuperar la id=' + id
    })
  })
}

exports.update = (req, res) => {
  const id = req.params.id

  Resource.update(req.body, {
    where: { id }
  }).then(num => {
    if (num == 1) {
      res.status(200).send({
        message: 'El elemento ha sido actualizado correctamente.'
      })
    } else {
      res.status(404).send({
        message: `No se puede actualizar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento o el cuerpo de la petición está vacío.`
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: 'Algún error ha surgido al actualiazar la id=' + id
    })
  })
}

exports.delete = (req, res) => {
  const id = req.params.id

  Resource.destroy({
    where: { id }
  }).then(num => {
    if (num == 1) {
      res.status(200).send({
        message: 'El elemento ha sido borrado correctamente'
      })
    } else {
      res.status(404).send({
        message: `No se puede borrar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento.`
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: 'Algún error ha surgido al borrar la id=' + id
    })
  })
}

exports.getAdminStructure = (req, res) => {

  const url = req.query.url
  const element = req.query.element

  Resource.findOne({
    where: { url: url, type: 'admin' },
    include: [
      {
        attributes: ['structure'],
        model: db.AdminResource,
        as: 'adminResources',
        where: { element: element }
      }
    ]
  }).then(data => {
    if (data) {
      data.adminResources[0].structure = JSON.parse(data.adminResources[0].structure)
      res.status(200).send(data.adminResources[0])
    } else {
      res.status(404).send({
        message: `No se puede encontrar el elemento con la url=${url}.`
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: 'Algún error ha surgido al recuperar la url=' + url
    })
  })
}


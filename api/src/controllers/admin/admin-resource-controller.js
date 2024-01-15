const db = require('../../models')
const AdminResource = db.AdminResource
const Op = db.Sequelize.Op

exports.create = (req, res) => {

  try {
    JSON.parse(req.body.structure);
  } catch (error) {
    res.status(500).send({
      errors: [
        {message:'El JSON no es válido o no está correctamente formateado.'}
      ]
    })
  }

  req.body.structure = JSON.stringify(JSON.parse(req.body.structure))
  req.body.resourceId = req.body.parentFormId

  AdminResource.create(req.body).then(data => {
    AdminResource.findAndCountAll({
      attributes: ['id', 'element'],
      where: {resourceId: req.body.resourceId},
      order: [['createdAt', 'ASC']]
    }).then( result => {
      res.status(200).send(result)
    }).catch(err => {
      res.status(500).send({
        message: err.errors || 'Algún error ha surgido al recuperar los datos.'
      })
    })
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
  const whereStatement = {}

  for (const key in req.query) {
    if (req.query[key] != '' && key != 'page' && key != 'size') {
      whereStatement[key] = { [Op.substring]: req.query[key] }
    }
  }

  const condition = Object.keys(whereStatement).length > 0 ? { [Op.and]: [whereStatement] } : {}

  AdminResource.findAndCountAll({
    where: condition,
    limit,
    offset,
    order: [['createdAt', 'ASC']]
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

  AdminResource.findByPk(id).then(data => {
    if (data) {
      res.status(200).send(data)
    } else {
      res.status(404).send({
        message: `No se puede encontrar el elemento con la id=${id}.`
      })
    }
  }).catch(err => {
    console.log(err)
    res.status(500).send({
      message: err.errors || 'Algún error ha surgido al recuperar los datos.'
    })
  })
}

exports.update = (req, res) => {

  const id = req.params.id

  try {
    JSON.parse(req.body.structure);
  } catch (error) {
    res.status(500).send({
      errors: [
        {message:'El JSON no es válido o no está correctamente formateado.'}
      ]
    })
  }

  req.body.structure = JSON.stringify(JSON.parse(req.body.structure))

  AdminResource.update(req.body, {
    where: { id }
  }).then(num => {

    if (num == 1) {
      AdminResource.findAndCountAll({
        attributes: ['id', 'element'],
        where: {resourceId: req.body.resourceId},
        order: [['createdAt', 'ASC']]
      }).then( result => {
        res.status(200).send(result)
      }).catch(err => {
        res.status(500).send({
          message: err.errors || 'Algún error ha surgido al recuperar los datos.'
        })
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

  AdminResource.findByPk(id).then(data => {
    if (data) {
      req.body.resourceId = data.resourceId
    }
  })

  AdminResource.destroy({
    where: { id }
  }).then(num => {

    if (num == 1) {
      AdminResource.findAndCountAll({
        attributes: ['id', 'element'],
        where: {resourceId: req.body.resourceId},
        order: [['createdAt', 'ASC']]
      }).then( result => {
        res.status(200).send({
          message: 'El elemento ha sido borrado correctamente.',
          result: result
        })
      }).catch(err => {
        res.status(500).send({
          message: err.errors || 'Algún error ha surgido al recuperar los datos.'
        })
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

  AdminResource.findOne({
    attributes: ['structure'],
    where: { element: element },
    include: [
      {
        model: db.Resource,
        as: 'resource',
        where: { url: url, type: 'admin' },
      }
    ]
  }).then(data => {
    if (data) {
      res.status(200).send(data)
    } else {
      res.status(404).send({
        message: `No se puede encontrar el elemento con la url=${url}.`
      })
    }
  }).catch(err => {
    console.log(err)
    res.status(500).send({
      message: 'Algún error ha surgido al recuperar la url=' + url
    })
  })
}

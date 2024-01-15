const db = require('../../models')
const AdminPage = db.AdminPage
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  AdminPage.create(req.body).then(data => {
    res.status(200).send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.errors || 'Algún error ha surgido al insertar el dato.'
    })
  })
}

exports.findAll = (req, res) => {
  const AdminPage = req.query.AdminPage || 1
  const limit = parseInt(req.query.size) || 10
  const offset = (AdminPage - 1) * limit

  const whereStatement = {}
  const condition = Object.keys(whereStatement).length > 0 ? { [Op.and]: [whereStatement] } : {}

  AdminPage.findAndCountAll({
    where: condition,
    attributes: ['id', 'name', 'url'],
    limit,
    offset,
    order: [['createdAt', 'DESC']]
  })
    .then(result => {
      result.meta = {
        total: result.count,
        AdminPages: Math.ceil(result.count / limit),
        currentAdminPage: AdminPage
      }

      res.status(200).send(result)
    }).catch(err => {
      console.log(err)
      res.status(500).send({
        message: err.errors || 'Algún error ha surgido al recuperar los datos.'
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  AdminPage.findByPk(id).then(data => {
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

  AdminPage.update(req.body, {
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

  AdminPage.destroy({
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

exports.getPage = (req, res) => {
  const url = req.query.url || ''

  AdminPage.findOne({
    where: { url }
  }).then(data => {
    if (data) {
      data.dataValues.structure = JSON.parse(data.dataValues.structure)
      res.status(200).send(data)
    } else {
      res.status(404).send({
        message: `No se puede encontrar el elemento con la url=${url}.`
      })
    }
  }).catch(err => {
    console.error(err)
    res.status(500).send({
      message: 'Algún error ha surgido al recuperar la url=' + url
    })
  })
}

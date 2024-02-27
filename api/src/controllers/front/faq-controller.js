const db = require('../../models')
const Faq = db.Faq

exports.findAll = (req, res) => {
  const limit = parseInt(req.query.size) || 5
  const order = req.query.order || 'DESC'

  Faq.findAndCountAll({
    attributes: ['name', 'order'],
    limit,
    order: [['createdAt', order]]
  })
    .then(result => {
      result.meta = {
        total: result.count,
        pages: Math.ceil(result.count / limit)
      }

      res.status(200).send(result)
    }).catch(err => {
      res.status(500).send({
        message: err.errors || 'Algún error ha surgido al recuperar los datos.'
      })
    })
}

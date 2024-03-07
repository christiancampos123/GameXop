module.exports = (app, upload) => {
  const router = require('express').Router()
  const uploadFiles = require('../middlewares/upload-files.js')
  const controller = require('../controllers/admin/image-controller.js')

  router.post('/', [uploadFiles], controller.create) // metemos aqui el middleware
  router.get('/', controller.findAll)
  router.get('/:id', controller.findOne)
  router.put('/:id', controller.update)
  router.delete('/:id', controller.delete)

  app.use('/api/admin/images', router)
}

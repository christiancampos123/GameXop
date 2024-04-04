module.exports = (app, upload) => {
  const router = require('express').Router()
  const controller = require('../controllers/admin/faq-controller.js')
  const authCookieMiddleware = require('../middlewares/auth-cookie.js')

  router.post('/', controller.create)
  router.get('/', [authCookieMiddleware], controller.findAll)
  router.get('/:id', controller.findOne)
  router.put('/:id', controller.update)
  router.delete('/:id', controller.delete)

  app.use('/api/admin/faqs', router)
}

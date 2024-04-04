const authCookieMiddleware = (req, res, next) => {
  console.log('esto es un log del middleware')
  next()
}

module.exports = authCookieMiddleware

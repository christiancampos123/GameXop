const authCookieMiddleware = (req, res, next) => {
  console.log('esto es un console del middleware')
  next()
}

module.exports = authCookieMiddleware

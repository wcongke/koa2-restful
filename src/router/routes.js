const home = require('./home/index')
const todo = require('./todo/index')
const token = require('./token/index')

module.exports = (router, koaBody) => {
  home(router)
  todo(router, koaBody)
  token(router, koaBody)
}

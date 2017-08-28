const home = require('./home/index')
const todo = require('./todo/index')

module.exports = (router, koaBody) => {
  home(router)
  todo(router, koaBody)
}

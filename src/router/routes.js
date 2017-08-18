const todo = require('./todo/')

module.exports = function (router, koaBody) {
  todo(router, koaBody)
}

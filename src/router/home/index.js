const home = require('../../controllers/home')

module.exports = function (router) {
  router
    .get('/', home)
}

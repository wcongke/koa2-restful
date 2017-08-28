const home = require('../../controllers/home')

module.exports = (router) => {
  router
    .get('/', home)
}

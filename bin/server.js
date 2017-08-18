global.Promise = require('bluebird')

const config = global.config = require('../config/index')()

require('../src/app').listen(config.site.PORT)

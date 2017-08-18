const Router = require('koa-router')
const koaBody = require('koa-body')()
const routes = require('./routes')

const router = new Router()

routes(router, koaBody)

module.exports = router

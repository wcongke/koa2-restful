const Koa = require('koa')
const Router = require('./router/index')

const app = new Koa()

app.use(Router.routes())
app.use(Router.allowedMethods())

module.exports = app

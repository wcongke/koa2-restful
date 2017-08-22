const Koa = require('koa')
const Router = require('./router/index')
const Views = require('koa-views')
const Path = require('path')

const app = new Koa()

app.use(Views(Path.join(__dirname, `./views`), {
  extension: 'ejs'
}))
app.use(Router.routes())
app.use(Router.allowedMethods())

module.exports = app

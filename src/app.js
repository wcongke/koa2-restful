const Koa = require('koa')
const Router = require('./router/index')
const Views = require('koa-views')
const Path = require('path')

const app = new Koa()

app
  .use(Views(Path.join(__dirname, `./views`), {
    extension: 'ejs'
  }))
  .use((ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Content-Type', 'application/json')
    ctx.set('Access-Control-Expose-Headers', 'Access-Control-Allow-Origin')
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH, OPTIONS')
    ctx.set('Access-Control-Allow-Credentials', true) // 允许带上 cookie
    return next()
  })
  .use(Router.routes())
  .use(Router.allowedMethods())

module.exports = app

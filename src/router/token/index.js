const token = require('../../api/token/index')

module.exports = (router, koaBody) => {
  router
    // 设置Token
    .get('/setToken', token.set)

    // 检查Token
    .get('/existsToken', token.exists)

    // 删除token
    .delete('/delToken', token.del)
}

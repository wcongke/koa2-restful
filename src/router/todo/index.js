const todo = require('../../api/todo/index')

module.exports = function (router, koaBody) {
  router
    // 获取todos列表
    .get('/todos', todo.list)

    // 获取todo详情
    .get('/todos/:id', todo.detail)

    // 新建todo
    .post('/todos/add', koaBody, todo.add)

    // 删除todo
    .del('/todos/:id', todo.del)
}

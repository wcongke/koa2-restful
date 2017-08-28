const todo = require('../../api/todo/index')

module.exports = (router, koaBody) => {
  router
    // 获取todos列表
    .get('/todos', todo.list)

    // 获取todo详情
    .get('/todo/:id', todo.detail)

    // 新建todo
    .post('/todo/add', koaBody, todo.add)

    // 更新todo
    .patch('/todo/edit', koaBody, todo.edit)

    // 删除todo
    .del('/todo/:id', todo.del)

    // 设置todo有效期
    .post('/todo/endTime', koaBody, todo.setTime)

    // 获取todo有效期
    .get('/todo/endTime/:id', todo.getTime)
}

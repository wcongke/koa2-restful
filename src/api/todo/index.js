const TodoModel = require('../../model/todo/index')

/**
 * 获取Todos
 * @returns {Array} todos
 */
function getTodos () {
  return new Promise((resolve) => {
    return TodoModel.getTodos().then((res) => {
      let arr = []

      if (!res) {
        resolve([])
        return
      }

      for (let i = 0; i < res.length; i++) {
        arr.push({
          id: res[i].id,
          info: res[i].info
        })
      }
      resolve(arr)
    })
  })
}

/**
 * 获取Todo
 * @param {Number} id id
 * @returns {Object} todo
 */
function getTodo (id) {
  return new Promise((resolve) => {
    return TodoModel.getTodo(id).then((res) => {
      if (!res) {
        resolve(res)
        return
      }

      resolve({
        id: res.id,
        info: res.info
      })
    })
  })
}

/**
 * 创建Todo
 * @param {Object} data data
 * @returns {Object} todo
 */
function addTodo (data) {
  return new Promise((resolve) => {
    return TodoModel.addTodo(data).then((res) => {
      resolve(res)
    })
  })
}

/**
 * 编辑todo
 * @param {Number} id id
 * @param {Object} data data
 * @returns {Object} todo
 */
function editTodo (id, data) {
  return new Promise((resolve) => {
    return TodoModel.editTodo(id, data).then((res) => {
      resolve(res)
    })
  })
}

/**
 * 删除Todo
 * @return {Object} todo
 */
function delTodo (id) {
  return new Promise((resolve) => {
    return TodoModel.delTodo(id).then((res) => {
      resolve(res)
    })
  })
}

// 获取TODO列表
module.exports.list = async (ctx, next) => {
  ctx.body = {
    code: '1',
    desc: 'ok',
    result: {
      list: await getTodos()
    }
  }
}

// 获取TODO详情
module.exports.detail = async (ctx, next) => {
  const TODO = await getTodo(ctx.params.id)

  ctx.body = {
    code: TODO ? '1' : '0',
    desc: TODO ? 'ok' : 'todo 不存在',
    result: TODO
  }
}

// 新建TODO
module.exports.add = async (ctx, next) => {
  const body = ctx.request.body

  if (!body.id) {
    ctx.body = {
      code: 0,
      desc: '无todo id'
    }
    return
  }

  if (!body.info) {
    ctx.body = {
      code: 0,
      desc: '无todo info'
    }
    return
  }

  const had = await getTodo(body.id)

  if (had) {
    ctx.body = {
      code: 0,
      desc: 'todo id 已存在'
    }
    return
  }

  await addTodo({
    id: body.id,
    info: body.info
  })

  ctx.body = {
    code: 1,
    desc: 'ok',
    result: {
      list: await getTodos()
    }
  }
}

// 更新todo
module.exports.edit = async (ctx, next) => {
  const body = ctx.request.body

  if (!body.id) {
    ctx.body = {
      code: 0,
      desc: '无todo id'
    }
    return
  }

  if (!body.info) {
    ctx.body = {
      code: 0,
      desc: '无todo info'
    }
    return
  }

  const had = await getTodo(body.id)

  if (!had) {
    ctx.body = {
      code: 0,
      desc: 'todo id 不存在'
    }
    return
  }

  await editTodo(body.id, {
    id: body.id,
    info: body.info
  })

  ctx.body = {
    code: '1',
    desc: 'ok'
  }
}

// 删除TODO
module.exports.del = async (ctx, next) => {
  const deleted = await delTodo(ctx.params.id)

  ctx.body = {
    code: deleted ? '1' : '0',
    desc: deleted ? 'ok' : 'todo id 不存在'
  }
}

const TodoModel = require('../../model/todo/index')

/**
 * 获取todos
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
 * 获取todo
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
 * 创建todo
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
 * 删除todo
 * @return {Object} todo
 */
function delTodo (id) {
  return new Promise((resolve) => {
    return TodoModel.delTodo(id).then((res) => {
      resolve(res)
    })
  })
}

// 获取todo列表
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

// 新建todo
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

// 删除todo
module.exports.del = async (ctx, next) => {
  const deleted = await delTodo(ctx.params.id)

  ctx.body = {
    code: deleted ? '1' : '0',
    desc: deleted ? 'ok' : 'todo id 不存在'
  }
}

// 设置todo有效期
module.exports.setTime = async (ctx, next) => {
  const body = ctx.request.body
  const TODO = await getTodo(body.id)

  if (!TODO) {
    ctx.body = {
      code: '0',
      desc: 'todo 不存在'
    }
  }

  ctx.cookies.set(
    `todo_${body.id}`,
    JSON.stringify({
      id: body.id,
      endTime: body.endTime
    }),
    {
      domain: 'localhost',              // 写cookie所在的域名
      path: '/todo/endTime',            // 写cookie所在的路径
      maxAge: 10 * 60 * 1000,           // cookie有效时长
      expires: new Date(body.endTime),  // cookie失效时间
      httpOnly: false,                  // 是否只用于http请求中获取
      overwrite: true                   // 是否允许重写
    }
  )

  ctx.body = {
    code: '1',
    desc: 'ok'
  }
}

module.exports.getTime = async (ctx, next) => {
  const data = ctx.cookies.get(
    `todo_${ctx.params.id}`,
    {
      domain: 'localhost',
      path: '/todo/endTime'
    }
  )

  ctx.body = {
    code: data ? '1' : '0',
    desc: data ? 'ok' : '无有效期',
    result: {
      todo: data ? JSON.parse(data) : ''
    }
  }
}

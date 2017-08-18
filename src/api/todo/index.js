const TODOS = [
  {
    id: '1',
    info: 'todo 1'
  },
  {
    id: '2',
    info: 'todo 2'
  },
  {
    id: '3',
    info: 'todo 3'
  }
]

// 获取TODO列表
module.exports.list = async (ctx, next) => {
  ctx.body = {
    code: '1',
    desc: 'ok',
    result: {
      list: TODOS
    }
  }
}

// 获取TODO详情
module.exports.detail = async (ctx, next) => {
  const index = TODOS.findIndex(item => item.id === ctx.params.id)

  ctx.body = {
    code: index >= 0 ? '1' : '0',
    desc: index >= 0 ? 'ok' : 'todo id 不存在',
    result: index >= 0 ? {
      id: TODOS[index].id,
      info: TODOS[index].info
    } : ''
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

  const index = TODOS.findIndex(item => item.id === body.id)

  if (index < 0) {
    TODOS.push({
      id: body.id,
      info: body.info
    })
  } else {
    ctx.body = {
      code: 0,
      desc: 'todo id 已存在'
    }
    return
  }

  ctx.body = {
    code: 1,
    desc: 'ok',
    result: {
      list: TODOS
    }
  }
}

// 删除TODO
module.exports.del = async (ctx, next) => {
  const index = TODOS.findIndex(item => item.id === ctx.params.id)

  if (index >= 0) {
    TODOS.splice(index, 1)
  }

  ctx.body = {
    code: index >= 0 ? '1' : '0',
    desc: index >= 0 ? 'ok' : 'todo id 不存在',
    result: {
      list: TODOS
    }
  }
}

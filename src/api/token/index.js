const sha1 = require('sha1')
const TokenModel = require('../../model/token/index')

// 生成Token
module.exports.set = async (ctx, next) => {
  const userId = ctx.request.query.userId
  const token = sha1(userId + Date.parse(Date()))
  const setSuccessed = await TokenModel.set(token)

  ctx.body = {
    code: setSuccessed ? '1' : '0',
    desc: setSuccessed ? 'ok' : 'no',
    result: setSuccessed ? {
      token
    } : ''
  }
}

// 验证Token是否存在
module.exports.exists = async (ctx, next) => {
  const token = ctx.request.query.token
  const hadToken = await TokenModel.exists(token)

  ctx.body = {
    code: hadToken ? '1' : '0',
    desc: hadToken ? 'ok' : 'token不存在'
  }
}

// 删除Token
module.exports.del = async (ctx, next) => {
  const token = ctx.request.query.token
  const delSuccessed = await TokenModel.del(token)

  ctx.body = {
    code: delSuccessed ? '1' : '0',
    desc: delSuccessed ? 'ok' : 'token不存在'
  }
}

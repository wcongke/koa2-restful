const config = global.config = require('../../config/index')()
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const db = mongoose.connect(config.mongo.api.db, {
  useMongoClient: true
})

db
  .on('error', (err) => {
    console.log(`----数据库链接失败: ${err}----`)
  })
  .on('disconnected', () => {
    console.log('----数据库链接断开----')
  })
  .on('open', () => {
    console.log('----数据库链接成功----')
  })

module.exports = mongoose

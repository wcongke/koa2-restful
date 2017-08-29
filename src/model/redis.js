const nodeRedis = require('redis')
const redisConfig = global.config.redis
const redis = nodeRedis.createClient(redisConfig.PORT, redisConfig.HOSTNAME, redisConfig.options)

redis
  .on('ready', () => {
    console.log(`----redis准备写入----`)
  })
  .on('reconnecting', () => {
    console.log(`----redis重新链接----`)
  })
  .on('end', () => {
    console.log(`----redis断开链接----`)
  })
  .on('connect', () => {
    console.log(`----redis链接成功----`)
  })
  .on('error', (err) => {
    console.log(`----redis链接失败: ${err}----`)
  })

module.exports = redis

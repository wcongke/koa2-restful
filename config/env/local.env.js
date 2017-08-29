process.env.DEBUG = process.env.DEBUG || 'local-error:*'

module.exports = {

  // 站点相关的配置
  site: {
    NODE_ENV: 'local',
    PORT: 20177,
    HOSTNAME: 'localhost'
  },

  // mongo配置
  mongo: {
    options: {
      // mongoose 配置
    },
    api: {
      db: 'mongodb://localhost:27017/todo'
      // db: 'mongodb://username:password@host:port/dbname'
    }
  },

  // redis配置
  redis: {
    HOSTNAME: 'localhost',
    PORT: 6379,
    options: {}
  },

  // session配置
  session: {}
}

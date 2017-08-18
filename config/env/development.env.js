process.env.DEBUG = process.env.DEBUG || 'dev-errer:*'

module.exports = {

  // 站点相关的配置
  site: {
    NODE_ENV: 'development',
    PORT: 20177,
    HOSTNAME: 'localhost'
  },

  // mongo配置
  mongo: {
    options: {
      // mongoose 配置
    },
    api: {
      db: 'mongodb://localhost:27017/test_db'
      // db: 'mongodb://username:password@host:port/dbname'
    }
  },

  // session配置
  session: {}
}
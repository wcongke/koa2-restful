const redis = require('../redis')

module.exports = {
  /**
   * 设置token
   * @param {String} token
   * @returns {Promise}
   */
  set (token) {
    return new Promise((resolve, reject) => {
      return redis.set(`Token.${token}`, 60 * 60 * 24 * 7, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  /**
   * 检查token是否存在
   * @param {String} token
   * @returns {Promise}
   */
  exists (token) {
    return new Promise((resolve, reject) => {
      return redis.exists(`Token.${token}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  /**
   * 删除token
   * @param {String} token
   * @returns {Promise}
   */
  del (token) {
    return new Promise((resolve, reject) => {
      return redis.del(`Token.${token}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }
}

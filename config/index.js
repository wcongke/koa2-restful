const path = require('path')
const extend = require('extend')

/**
 * 获取配置文件
 * @return {object}      配置详情
 */

module.exports = function config () {
  // 获取当前环境变量
  const env = process.env.NODE_ENV || 'development'
  // 获取默认配置
  const cfg = require('./main')
  // 获取环境配置
  const envPath = path.resolve(`./config/env/${env}.env.js`)

  try {
    extend(cfg, require(envPath))
  } catch (err) {
    throw JSON.parse({text: `Load ${env} Config Error：${envPath}`})
  }

  // 如果允许增量配置，则继承增量配置
  if (cfg.extend) {
    const extPath = path.resolve(cfg.extend)
    try {
      // 深复制
      extend(true, cfg, require(extPath))
    } catch (err) {
      throw JSON.parse({test: `Load Extend Config Error：${extPath}`})
    }
  }

  return cfg
}

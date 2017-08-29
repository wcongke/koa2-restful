# koa2-restful
> 基于koa2的restful api工程框架

#### 目录结构
```bash
.
├── bin              // 工程服务配置
├── config           // 环境配置
├── mongo            // mongodb
├── src              // 主代码目录
│    ├── api         // 接口目录
│    ├── controllers // 操作层
│    ├── model       // 数据模型
│    ├── router      // 路由配置
│    ├── views       // 视图模板
│    └── app.js      // 工程入口
├── .gitignore       // Git忽略配置
├── .npmrc           // npm配置
├── nodemon.json     // nodemon配置文件
├── package.json     // npm包配置
├── pm2.json         // PM2配置文件
├── LICENSE          // LICENSE
└── README.md        // 读我吧~
```

#### 工程要求
- koa2.3+es6
- node版本在`7.6.0`以上(建议使用 [nvm](https://github.com/creationix/nvm) 来管理node版本)
- 代码风格检查 [standardjs](https://standardjs.com/readme-zhcn.html)

#### 工程依赖
- [koa-router](https://github.com/alexmingoia/koa-router)
- [koa-body](https://github.com/dlau/koa-body)
- [koa-views](https://github.com/queckezz/koa-views)
- [mongoose](https://github.com/Automattic/mongoose)
- [node_redis](https://github.com/NodeRedis/node_redis)

#### 安装依赖
```bash
npm install
```

#### mongo相关
```bash
# 导出集合
mongoexport -d todo -c todos -o ./mongo/todos.json --type json

# 导入集合
mongoimport -d todo -c todos ./mongo/todos.json
```

#### redis相关
```bash
# mac安装 Redis
brew install Redis
# 启动 Redis Server
redis-server
# 前端 Redis 客户端
redis-cli
```

#### 启动工程
- 调试地址 `localhost:20177`
- 开发 `npm run dev`
- 本地 `npm run local`
- 测试 `npm run test`
- 正式 `npm run prod`


# koa2-restful
> 基于koa2的restful api工程

#### 目录结构
```
.
├── bin              // 工程服务配置
├── config           // 环境配置
└── src              // 主代码目录
│    ├── api         // 接口目录
│    ├── model       // 数据模型
│    ├── router      // 路由配置
│    └── app.js      // 工程入口
├── .gitignore       // Git忽略配置
├── .npmrc           // npm配置
├── LICENSE          // LICENSE
├── package.json     // npm包配置
├── pm2.yml          // PM2配置文件
└── README.md        // 读我吧~
```

#### 工程要求
- koa2.3+es6
- node版本在`7.6.0`以上(建议使用 [nvm](https://github.com/creationix/nvm) 来管理node版本)
- js风格检查[standardjs](https://standardjs.com/readme-zhcn.html)

#### 工程依赖
- [koa-router](https://github.com/alexmingoia/koa-router)
- [koa-body](https://github.com/dlau/koa-body)
- [mongoose](https://github.com/Automattic/mongoose)

#### 安装依赖
```
npm install
```

#### 启动工程
- 开发 `npm run dev`
- 正式 `npm run prod`
- 本地 `npm run local`
- 测试 `npm run test`

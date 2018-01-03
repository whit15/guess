'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1514728005033_4939';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: false
  };

  config.mysql = {
    clients: {
      // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
      guess: {
        // host
        host: '116.62.29.178',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'Hhzl2016',
        // 数据库名
        database: 'guess',
      }
      // ...
    },
    // 所有数据库配置的默认值
    default: {

    },

    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };


  return config;
};

const app={
  HOST:process.env.IP||'localhost',
  PORT:process.env.PORT||7000,
  PRO_PORT:process.env.PRO_PORT||7001,
  BUILD_DIR:'../dist',//'build',
  DIST:'../dist',
  PUBLIC_DIR:'../public',
  DEV_ROOT_DIR:'',
  PRD_ROOT_DIR:'/',
  DEFAULT_TOKEN:'Basic 123456',
  PROXY_URI:'http://47.105.94.51:9202',
  SALT:'yiru',
  TOKEN_SECRET:'yiru',
  mongoUrl:'mongodb://localhost:27017/test',
  serverUrl:'http://localhost:7000',
  serverPort:6002,
  basepath:'/',
  platform:'pc',
  appNane:'...',
  publicPath:'http://localhost:7000/',
};

module.exports=app;

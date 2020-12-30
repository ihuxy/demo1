const app=require('./app');
const cfg={
  app,
};

const configs=(name='app')=>cfg[name];

module.exports=configs;

// const config=require('./app');
const apis={
  login:{
    url:'/auth/login',
    method:'post',
  },
  github:{
    url:'/auth/github',
    method:'post',
  },
  signup:{
    url:'/auth/signup',
    method:'post',
  },
  activeEmail:{
    url:'/auth/activeEmail',
    method:'post',
  },
  find:{
    url:'/users/find',
    method:'get',
  },
  findAll:{
    url:'/users/findAll',
    method:'get',
  },
  upUser:{
    url:'/users/upUser',
    method:'post',
  },
  superMe:{
    url:'/users/superMe',
    method:'post',
  },
  addUser:{
    url:'/users/addUser',
    method:'post',
  },
  editUser:{
    url:'/users/editUser',
    method:'post',
  },
  deleteUser:{
    url:'/users/deleteUser',
    method:'post',
  },
};

const target='/api';

// const target=`${config.PROXY_URI}/api`;

module.exports={apis,target};


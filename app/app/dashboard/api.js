import {utils} from '@common';
const {sleep}=utils;
export const fetchUser=async ()=>{
  await sleep();
  // console.log('fetchUser:请求成功');
  return {
    code:200,
    msg:'success',
    data:{
      name:'huy',
      age:18,
      role:5,
      email:'ah.yiru@gmail.com',
      addr:'wuhan',
    },
  };
};
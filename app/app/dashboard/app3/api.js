import {utils} from '@common';
const {sleep,wrapPromise}=utils;

const fetchData=async params=>{
  await sleep(params.wait);
  return {
    code:200,
    msg:'success',
    data:{
      name:'app1',
      ...params,
    },
  };
};

export const fetchApp1=wrapPromise(fetchData({id:1,wait:3000}));

export const fetchApp2=wrapPromise(fetchData({id:2,wait:5000}));





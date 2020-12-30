import {utils} from '@common';
const {storage}=utils;

import {logoutFn} from '@app/api/api';

import configs from '@app/configs';

export const demo1Logout=()=>{
  // logoutFn();
  storage.rm('token');
  location.href=configs.browserRouter?'/user/signin':'#/user/signin';
};

export const demo2Logout=()=>{
  logoutFn();
  storage.rm('token');
  location.href=configs.browserRouter?'/operation/user/login':'#/operation/user/login';
};
import {utils} from '@common';
const {sleep}=utils;
const routerKeys=[
  '/',
  '/setting',
  '/setting/layout',
  '/setting/menu',
  '/setting/header',
  '/setting/code',
  '/setting/level2',
  '/setting/level3',
  '/setting/level4',
  '/tools',
  // '/tools/suspense',
  // '/tools/errorboundary',
  // '/tools/styles',
  '/tools/hooks-test',
  '/vue-app',
  '/user',
  '/user/signin',
  '/user/signup',
  '/404',
];

const getPermission=async ()=>{
  await sleep();
  return {
    permList:routerKeys,
  };
};

export default getPermission;






















import fetcher,{suspense} from './fetcher';
const {apis}=require('../../configs/userApis');

const {
  login,
  github,
  signup,
  activeEmail,
  find,
  findAll,
  upUser,
  superMe,
  addUser,
  editUser,
  deleteUser,
}=apis;

export const loginFn=data=>fetcher({...login,data});
export const githubFn=data=>fetcher({...github,data});
export const signupFn=data=>fetcher({...signup,data});
export const activeEmailFn=data=>fetcher({...activeEmail,data});
export const findFn=params=>fetcher({...find,params});
export const findAllFn=params=>fetcher({...findAll,params});
export const upUserFn=data=>fetcher({...upUser,data});
export const superMeFn=data=>fetcher({...superMe,data});
export const addUserFn=data=>fetcher({...addUser,data});
export const editUserFn=data=>fetcher({...editUser,data});
export const deleteUserFn=data=>fetcher({...deleteUser,data});

export const suspenseFind=params=>suspense({...find,params});
export const suspenseFindAll=params=>suspense({...findAll,params});


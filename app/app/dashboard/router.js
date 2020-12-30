import {DesktopOutlined,CreditCardOutlined} from '@ant-design/icons';
import {fetchUser} from './api';
const router={
  path:'/dashboard',
  name:'Dashboard',
  icon:<DesktopOutlined />,
  children:[
    {
      path:'/app1',
      name:'app1',
      icon:<CreditCardOutlined />,
      component:()=>import('./app1'),
      resolve:{
        users:fetchUser,
      },
    },
    {
      path:'/app2',
      name:'app2',
      icon:<CreditCardOutlined />,
      component:()=>import('./app2'),
    },
    {
      path:'/app3',
      name:'app3',
      icon:<CreditCardOutlined />,
      component:()=>import('./app3'),
      resolve:{
        users1:fetchUser,
        // user:fetchUser,
      },
      loadData:{
        users1:fetchUser,
      },
    },
    {
      path:'/app4',
      name:'admin',
      icon:<CreditCardOutlined />,
      component:()=>import('./app4'),
    },
  ],
};
export default router;
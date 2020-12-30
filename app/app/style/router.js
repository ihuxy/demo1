import {DesktopOutlined,CreditCardOutlined} from '@ant-design/icons';
const router={
  path:'/style',
  name:'style',
  icon:<DesktopOutlined />,
  children:[
    {
      path:'/layout',
      name:'layout',
      icon:<CreditCardOutlined />,
      component:()=>import('./layout'),
    },
    {
      path:'/anicon',
      name:'anicon',
      icon:<CreditCardOutlined />,
      component:()=>import('./anicon'),
    },
    {
      path:'/icons',
      name:'icons',
      icon:<CreditCardOutlined />,
      component:()=>import('./icons'),
    },
  ],
};
export default router;
import {DesktopOutlined,CreditCardOutlined} from '@ant-design/icons';
import children from './400/router';
const router={
  path:'/pages',
  name:'页面管理',
  title:'页面管理',
  icon:<DesktopOutlined />,
  children:[
    {
      path:'/400',
      name:'400',
      icon:<CreditCardOutlined />,
      children,
    },
    {
      path:'/500',
      name:'500',
      icon:<CreditCardOutlined />,
      component:()=>import('./500'),
    },
  ],
};
export default router;
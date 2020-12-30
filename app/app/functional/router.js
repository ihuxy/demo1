import {DesktopOutlined,CreditCardOutlined} from '@ant-design/icons';
const router={
  path:'/functional',
  name:'functional',
  icon:<DesktopOutlined />,
  children:[
    {
      path:'/curry',
      name:'curry',
      icon:<CreditCardOutlined />,
      component:()=>import('./curry'),
    },
  ],
};
export default router;
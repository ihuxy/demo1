import {DesktopOutlined,CreditCardOutlined} from '@ant-design/icons';
const router=[
  {
    path:'/401',
    name:'401',
    icon:<CreditCardOutlined />,
    component:()=>import('./401'),
  },
  {
    path:'/403',
    name:'403',
    icon:<CreditCardOutlined />,
    component:()=>import('./403'),
  },
  {
    path:'/404',
    name:'404',
    icon:<CreditCardOutlined />,
    component:()=>import('./404'),
  },
];
export default router;
import {CreditCardOutlined} from '@ant-design/icons';
const router=[
  {
    path:'/errorBoundary',
    name:'errorBoundary',
    icon:<CreditCardOutlined />,
    component:()=>import('./'),
  },
];
export default router;
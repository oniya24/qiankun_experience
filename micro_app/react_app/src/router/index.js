import Category from '../pages/category';
import Detail from '../pages/detail';
import Display from '../pages/display';


const router = [
  {
    name: 'category',
    path: '/category',
    component: Category
  },
  {
    name: 'detail',
    path: '/detail',
    component: Detail
  },
  {
    name: 'display',
    path: '/display',
    component: Display
  }
]

export default router;
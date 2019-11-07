import { Admin } from '../../Admin/Admin';
import { Users } from '../../Users/Users';

export const mainPageRoutes = [
    {
        path: '/main-page/users',
        component: Users
    },
    {
        path: '/main-page/admin',
        component: Admin 
    }
];
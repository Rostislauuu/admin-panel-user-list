import { Admin } from '../Information/Admin/Admin';
import { Users } from '../Information/Users/Users';

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
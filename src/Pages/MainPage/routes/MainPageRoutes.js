import { Admin } from '../Information/Admin/Admin';
import { Users } from '../Information/Users/Users';
import { Chart } from '../Information/Chart/Chart';
import { Devices } from '../Information/Devices/Devices';


export const mainPageRoutes = [
    {
        path: '/main-page/users',
        component: Users
    },
    {
        path: '/main-page/admin',
        component: Admin 
    },
    {
        path: '/main-page/chart',
        component: Chart
    },
    {
        path: '/main-page/devices',
        component: Devices
    }
];
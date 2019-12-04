import { AddUser } from '../Information/AddUser/AddUser';
import { Users } from '../Information/Users/Users';
import { Chart } from '../Information/Chart/Chart';
import { DevicesList } from '../Information/Devices/DevicesList/DevicesList';
import { ManageDevices } from '../Information/Devices/ManageDevices/ManageDevices';

export const mainPageRoutes = [
    {
        path: '/main-page/users',
        component: Users
    },
    {
        path: '/main-page/admin',
        component: AddUser
    },
    {
        path: '/main-page/chart',
        component: Chart
    },
    {
        path: '/main-page/devices_list',
        component: DevicesList
    },
    {
        path: '/main-page/manage_devices',
        component: ManageDevices
    }
];
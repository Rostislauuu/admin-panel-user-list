import { AddDevice } from '../AddDevice/AddDevice';
import { ApplyDevice } from '../ApplyDevice/ApplyDevice';

export const manageDevicesRoutes = [
    {
        path: '/main-page/manage_devices/add',
        component: AddDevice
    },
    {
        path: '/main-page/manage_devices/apply',
        component: ApplyDevice
    }
];
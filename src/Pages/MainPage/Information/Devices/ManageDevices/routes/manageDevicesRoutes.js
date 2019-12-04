import { AddDevice } from '../AddDevice/AddDevice';
import { UpdateDevice } from '../UpdateDevice/UpdateDevice';
import { DeleteDevice } from '../DeleteDevice/DeleteDevice';
import { ApplyDevice } from '../ApplyDevice/ApplyDevice';

export const manageDevicesRoutes = [
    {
        path: '/main-page/manage_devices/add',
        component: AddDevice
    },
    {
        path: '/main-page/manage_devices/update',
        component: UpdateDevice
    },
    {
        path: '/main-page/manage_devices/delete',
        component: DeleteDevice
    },
    {
        path: '/main-page/manage_devices/apply',
        component: ApplyDevice
    }
];
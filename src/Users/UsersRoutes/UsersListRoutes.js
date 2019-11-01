import UsersList from '../UsersList';
import UserInfo from '../UserInfo';

export const usersListRoutes = [
    {
        path: "/main-page/users/:id",
        component: UserInfo
    },
    {
        path: "/main-page/users",
        component: UsersList
    }
]
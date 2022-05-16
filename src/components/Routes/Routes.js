import {HOME_ROUTE, LIST_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE, SETTINGS_ROUTE} from "../../utils/consts";
import LoginPage from "../../pages/LoginPage/LoginPage";
import HomePage from "../../pages/HomePage/HomePage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import ListPage from "../../pages/ListPage/ListPage";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        page: <HomePage/>,
    },
    {
        path: LIST_ROUTE,
        page: <ListPage/>,
    },
    {
        path: LOGIN_ROUTE,
        page: <LoginPage/>,
    },
    {
        path: REGISTER_ROUTE,
        page: <RegisterPage/>,
    },
]
export const privateRoutes = [
    {
        path: HOME_ROUTE,
        page: <HomePage/>,
    },
    {
        path: LIST_ROUTE,
        page: <ListPage/>,
    },
    {
        path: SETTINGS_ROUTE,
        page: <SettingsPage/>,
    },
    {
        path: PROFILE_ROUTE,
        page: <ProfilePage/>,
    },
]
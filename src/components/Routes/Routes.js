import {HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE, SETTINGS_ROUTE} from "../../utils/consts";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import RegisterPage from "../../pages/RegisterPage";
import SettingsPage from "../../pages/SettingsPage";
import ProfilePage from "../../pages/ProfilePage";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        page: <HomePage/>,
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
        path: SETTINGS_ROUTE,
        page: <SettingsPage/>,
    },
    {
        path: PROFILE_ROUTE,
        page: <ProfilePage/>,
    },
]
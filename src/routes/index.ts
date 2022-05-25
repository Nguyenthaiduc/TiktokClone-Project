import routesConfig from '../config/routes';
//Layouts
import { HeaderOnly } from '../components/Layout';
import {DefaultLayout} from '../components/Layout'
//Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search'
//public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following, layout: DefaultLayout },
    { path: routesConfig.profile, component: Profile, layout: DefaultLayout },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [''];

export { publicRoutes, privateRoutes };

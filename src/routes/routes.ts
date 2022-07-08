import config from '@/config';
//Layouts
import { HeaderOnly } from '@/layouts';
import { DefaultLayout } from '@/layouts';
//Pages
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';
import Live from '@/pages/Live';
//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following, layout: DefaultLayout },
    { path: config.routes.live, component: Live, layout: DefaultLayout },
    { path: config.routes.profile, component: Profile, layout: DefaultLayout },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];
//private routes
// Khi đăng nhập vào sẽ có các routes private
const privateRoutes = [''];

export { publicRoutes, privateRoutes };

import config from '~/config';

import Home from '~/pages/Home';
import Laptop from '~/pages/Laptop';
import OrderLookup from '~/pages/OrderLookup';
import Phone from '~/pages/Phone';

//chưa login
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.phone, component: Phone },
    { path: config.routes.laptop, component: Laptop },
    { path: config.routes.orderlookup, component: OrderLookup },
];

//khi login
const privateRoutes = [];

export { publicRoutes, privateRoutes };

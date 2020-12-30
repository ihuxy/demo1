import dashboard from './dashboard/router';
import user from './user/router';
import pages from './pages/router';
import errorBoundary from './errorBoundary/router';
import auth from './auth/router';

import use from './use/router';

import functional from './functional/router';

import style from './style/router';

import playground from './playground/router';

const app=[dashboard,pages,...user,...errorBoundary,...auth,use,functional,style,playground];

export default app;






















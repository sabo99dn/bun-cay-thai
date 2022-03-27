import mock from './mock';
// import './user/index.js';
import './notification/index.js';
//import './notificationCategory/index.js';
// import './common/index.js';
// import './vouchers';
// import './sliders/index.js';
// import './product';
// import './category';
// import './promotion';
// import './pageDetails';
// import './reports';
// import './shipAddress';
// import './branch';
// import './orders';

mock.onAny().passThrough(); // forwards the matched request over network

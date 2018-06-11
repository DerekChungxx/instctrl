'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('../controllers/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var apiRouter = (0, _api2.default)();

app.use(apiRouter);

app.listen(3000, function () {
  console.log('Example app is running on port 3000!');
});
//# sourceMappingURL=instApp.js.map
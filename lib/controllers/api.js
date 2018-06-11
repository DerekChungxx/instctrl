'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = instAPI;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _main = require('./pws/main');

var pwsCtrl = _interopRequireWildcard(_main);

var _main2 = require('./load/main');

var loadCtrl = _interopRequireWildcard(_main2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function instAPI() {
  var router = _express2.default.Router();

  router.use(_bodyParser2.default.json());

  router.get('/pws', pwsCtrl.default);

  router.get('/pws/:dev_id/output-config/:conf_id', pwsCtrl.GetOutputConfig);

  router.post('/pws/:dev_id/output-config/:conf_id', pwsCtrl.SetOutputConfig);

  router.post('/pws/:dev_id/output-control/:conf_id', pwsCtrl.EnableOutput);

  router.post('/pws/:dev_id/measurement', pwsCtrl.GetMeasurement);

  router.get('/load', loadCtrl.default);

  router.get('/load/:dev_id/:ch_id/output-config/:conf_id', loadCtrl.GetOutputConfig);

  router.post('/load/:dev_id/:ch_id/output-config/:conf_id', loadCtrl.SetOutputConfig);

  router.post('/load/:dev_id/:ch_id/output-control/:conf_id', loadCtrl.EnableOutput);

  return router;
}
//# sourceMappingURL=api.js.map
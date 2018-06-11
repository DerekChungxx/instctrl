'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetMeasurement = exports.EnableOutput = exports.SetOutputConfig = exports.GetOutputConfig = undefined;

var _serialDev = require('../../dev/serialDev');

var _serialDev2 = _interopRequireDefault(_serialDev);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pwsSearchDev(req, res) {
  (0, _serialDev2.default)();
  res.send(' Search Dev OK');
}
function GetOutputConfig(req, res) {
  res.send(' GetOutputConfig, dev id = ' + req.params.dev_id + ', config id = ' + req.params.conf_id);
}
function SetOutputConfig(req, res) {
  console.log(req.body);
  res.send(' SetOutputConfig, ' + req.body);
}

function EnableOutput(req, res) {
  res.send(' EnableOutput, dev id = ' + req.params.dev_id + ', config id = ' + req.params.conf_id);
}

function GetMeasurement(req, res) {
  console.log(req);
  res.send('OK');
}

exports.default = pwsSearchDev;
exports.GetOutputConfig = GetOutputConfig;
exports.SetOutputConfig = SetOutputConfig;
exports.EnableOutput = EnableOutput;
exports.GetMeasurement = GetMeasurement;
//# sourceMappingURL=main.js.map
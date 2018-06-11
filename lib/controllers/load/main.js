'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function loadSearchDev(req, res) {
  res.send(' Search Dev OK');
}
function GetOutputConfig(req, res) {
  res.send(' GetOutputConfig, dev id = ' + req.params.dev_id + ', ch id = ' + req.params.ch_id + '\n        , config id = ' + req.params.conf_id);
}
function SetOutputConfig(req, res) {
  console.log(req.body);
  res.send(' SetOutputConfig, ' + req.body);
}

function EnableOutput(req, res) {
  res.send(' EnableOutput, dev id = ' + req.params.dev_id + ', config id = ' + req.params.conf_id);
}

exports.default = loadSearchDev;
exports.GetOutputConfig = GetOutputConfig;
exports.SetOutputConfig = SetOutputConfig;
exports.EnableOutput = EnableOutput;
//# sourceMappingURL=main.js.map
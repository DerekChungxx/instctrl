import serialDevSearch from '../../dev/serialDev';

function pwsSearchDev(req, res) {
  serialDevSearch();
  res.send(' Search Dev OK');
}
function GetOutputConfig(req, res) {
  res.send(` GetOutputConfig, dev id = ${req.params.dev_id}, config id = ${req.params.conf_id}`);
}
function SetOutputConfig(req, res) {
  console.log(req.body);
  res.send(` SetOutputConfig, ${req.body}`);
}

function EnableOutput(req, res) {
  res.send(` EnableOutput, dev id = ${req.params.dev_id}, config id = ${req.params.conf_id}`);
}

function GetMeasurement(req, res) {
  console.log(req);
  res.send('OK');
}

export default pwsSearchDev;
export { GetOutputConfig, SetOutputConfig, EnableOutput, GetMeasurement };


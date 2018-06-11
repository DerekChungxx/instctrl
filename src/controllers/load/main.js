function loadSearchDev(req, res) {
  res.send(' Search Dev OK');
}
function GetOutputConfig(req, res) {
  res.send(` GetOutputConfig, dev id = ${req.params.dev_id}, ch id = ${req.params.ch_id}
        , config id = ${req.params.conf_id}`);
}
function SetOutputConfig(req, res) {
  console.log(req.body);
  res.send(` SetOutputConfig, ${req.body}`);
}

function EnableOutput(req, res) {
  res.send(` EnableOutput, dev id = ${req.params.dev_id}, config id = ${req.params.conf_id}`);
}

export default loadSearchDev;
export { GetOutputConfig, SetOutputConfig, EnableOutput };


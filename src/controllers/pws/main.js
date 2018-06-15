import serialDevSearch from '../../dev/serialDev';

function pwsSearchDev(req, res) {
  // serialDevSearch();
  const promise = new Promise(serialDevSearch);

  promise.then((v) => {
    console.log(v);
    res.send(v);
    // res.send(' Search Dev OK!!!');
  });
  // res.send(' Search Dev OK');
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


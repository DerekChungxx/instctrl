import express from 'express';
import bodyParser from 'body-parser';
import pwsSearchDev, * as pwsCtrl from './pws/main';
import loadSearchDev, * as loadCtrl from './load/main';

export default function instAPI() {
  const router = express.Router();

  router.use(bodyParser.json());

  router.get('/pws', pwsSearchDev);

  router.get('/pws/:dev_id/output-config/:conf_id', pwsCtrl.GetOutputConfig);

  router.post('/pws/:dev_id/output-config/:conf_id', pwsCtrl.SetOutputConfig);

  router.post('/pws/:dev_id/output-control/:conf_id', pwsCtrl.EnableOutput);

  router.post('/pws/:dev_id/measurement', pwsCtrl.GetMeasurement);

  router.get('/load', loadSearchDev);

  router.get('/load/:dev_id/:ch_id/output-config/:conf_id', loadCtrl.GetOutputConfig);

  router.post('/load/:dev_id/:ch_id/output-config/:conf_id', loadCtrl.SetOutputConfig);

  router.post('/load/:dev_id/:ch_id/output-control/:conf_id', loadCtrl.EnableOutput);

  return router;
}

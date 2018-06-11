'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SerialPort = require('serialport');

var port = new SerialPort('/dev/ttyACM0', { autoOpen: false });

function devOpen() {
  port.open(function (err) {
    if (err) {
      return console.log('Error opening port: ', err.message);
    }

    // Because there's no callback to write, write errors will be emitted on the port:
    port.write('*idn?\r\n');
    return true;
  });

  // The open event is always emitted
  port.on('open', function () {
    // open logic
    console.log('open ttyACM0');
  });

  port.on('data', function (data) {
    console.log(data.toString());
  });
}

exports.default = devOpen;
//# sourceMappingURL=devSerialPort.js.map
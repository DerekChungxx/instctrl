"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint class-methods-use-this: "off" */
// const fs = require('fs');
// const SerialPort = require('serialport');


// const supportedPort = ['/dev/ttyACM0', '/dev/ttyACM1'];
// const port = new SerialPort('/dev/ttyACM0', { autoOpen: false });

// function devOpen(devName) {
//   const port = new SerialPort(devName);
//   const usbInstrument = new UsbInst(port);


//   // port.open((err) => {
//   //   if (err) {
//   //     return console.log('Error opening port: ', err.message);
//   //   }

//   //   // Because there's no callback to write, write errors will be emitted on the port:
//   //   port.write('*idn?\r\n');
//   //   return true;
//   // });

//   // port.on('data', (data) => {
//   //   console.log('2');
//   //   console.log(data.toString());
//   //   // port.close();
//   // });

//   usbInstrument.openUsb1();
//   usbInstrument.port.write('*idn?\r\n');
//   setTimeout(usbInstrument.closeUsb1, 5000);
//   setTimeout(usbInstrument.openUsb2, 10000);
//   setTimeout(usbInstrument.writeout, 15000);
// }


function serialDevSearch() {
  // devOpen(supportedPort[0]);
}
exports.default = serialDevSearch;
//# sourceMappingURL=serialDev.js.map
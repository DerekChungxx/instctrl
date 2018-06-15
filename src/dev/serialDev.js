/* eslint class-methods-use-this: "off" */
// const fs = require('fs');
const SerialPort = require('serialport');

const pwrModel = ['PFR'];

const supportedPort = ['/dev/ttyACM0', '/dev/ttyACM1'];
// const port = new SerialPort('/dev/ttyACM0', { autoOpen: false });

const devIdn = [];

function devOpen(Num, devName, resolve, reject) { // eslint-disable-line no-unused-vars
  const port = new SerialPort(devName, { baudRate: 9600, autoOpen: false });
  //   const usbInstrument = new UsbInst(port);

  port.on('data', (data) => {
    console.log(`Port${Num}: ** Response buffer **`);
    console.log(`Port${Num}: ${data.toString()}`);
    devIdn[Num] = data.toString();
    console.log(`Port${Num}: ${devIdn[Num].split(',')[1].split('-')[0]}`);
    if (devIdn[Num].split(',')[1].split('-')[0] === pwrModel[0]) {
      console.log(`devIdn${Num}= ${devIdn[Num].split(',')[1]},${devIdn[Num].split(',')[2]}`);
      resolve(`${devIdn[Num].split(',')[1]},${devIdn[Num].split(',')[2]}`);
    }

    port.close();
  });

  // The open event is always emitted
  port.on('open', () => {
    console.log(`Port${Num}: ${devName} is open!`);
  });

  port.on('error', (err) => {
    console.log(`Error: ${err.message}`);
  });

  port.open((err) => {
    if (err) {
      return console.log(`Port${Num}: Error opening port: ${err.message}`);
    }

    port.write('*idn?\r\n', (error) => {
      if (error) {
        return console.log(`Port${Num}: Error on write: ${error.message}`);
      }
      console.log(`Port${Num}: message written`);
      return true;
    });

    return true;
  });


//   usbInstrument.openUsb1();
//   usbInstrument.port.write('*idn?\r\n');
//   setTimeout(usbInstrument.closeUsb1, 5000);
//   setTimeout(usbInstrument.openUsb2, 10000);
//   setTimeout(usbInstrument.writeout, 15000);
}


function serialDevSearch(resolve, reject) {
  for (let i = 0; i < 2; i += 1) {
    devOpen(i, supportedPort[i], resolve, reject); // eslint-disable-line no-unused-vars
  }
  // supportedPort.map(key, () => {})
}
export default serialDevSearch;


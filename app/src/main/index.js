const electron = require('electron');

const dock = require('./dock');
const ipc = require('./ipc');
const menu = require('./menu');
const windows = require('./windows');

const app = electron.app;

let config = {};

if (process.env.NODE_ENV === 'development') {
  config = require('../../../config');
  config.url = `http://localhost:${config.port}`;
} else {
  config.devtron = false;
  config.url = `file://${__dirname}/dist/index.html`;
}

ipc.init();

app.on('ready', () => {
  windows.main.init(config);
  menu.init(config);
  dock.init(config);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  windows.main.init(config);
});

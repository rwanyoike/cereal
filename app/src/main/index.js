const electron = require('electron');

const dock = require('./dock');
const menu = require('./menu');
const windows = require('./windows');

const ipcMain = electron.ipcMain;
const app = electron.app;
const dialog = electron.dialog;
const main = windows.main;

let config = {};

if (process.env.NODE_ENV === 'development') {
  config = require('../../../config');
  config.url = `http://localhost:${config.port}`;
} else {
  config.devtron = false;
  config.url = `file://${__dirname}/dist/index.html`;
}

app.on('ready', () => {
  main.init(config);
  menu.init(config);
  dock.init(config);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  main.init(config);
});

ipcMain.on('do-set-title', (event, arg) => {
  main.win.setTitle(arg);
});

ipcMain.on('do-open-file', () => {
  const options = {
    filters: [
      {
        name: 'Archives',
        extensions: ['cbz', 'zip'],
      },
    ],
    properties: ['openFile'],
  };

  dialog.showOpenDialog(main.win, options, (filePaths) => {
    if (!Array.isArray(filePaths)) return
    main.send('on-open-file', filePaths);
  });
});

ipcMain.on('do-prev-item', () => {
  main.send('on-prev-item');
});

ipcMain.on('do-next-item', () => {
  main.send('on-next-item');
});

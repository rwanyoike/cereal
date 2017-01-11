module.exports = {
  init,
};

const electron = require('electron');

const dialog = require('./dialog');
const windows = require('./windows');

const ipcMain = electron.ipcMain;

function init() {
  /**
   * Dialog
   */

  ipcMain.on('do-open-file', () => {
    dialog.doPickAndOpen();
  });

  /**
   * Events
   */

  ipcMain.on('do-prev-item', () => {
    windows.main.send('on-prev-item');
  });

  ipcMain.on('do-next-item', () => {
    windows.main.send('on-next-item');
  });

  /**
   * Windows: Main
   */

  ipcMain.on('do-set-title', (event, arg) => {
    windows.main.setTitle(arg);
  });

  ipcMain.on('do-fullscreen', () => {
    windows.main.toggleFullScreen();
  });
}

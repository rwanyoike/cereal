module.exports = {
  doPickAndOpen,
};

const electron = require('electron');

const windows = require('./windows');

const dialog = electron.dialog;

function doPickAndOpen() {
  const options = {
    filters: [
      { name: 'Archives', extensions: ['cbz', 'zip'] },
    ],
    properties: ['openFile'],
  };

  dialog.showOpenDialog(windows.main.win, options, (filePaths) => {
    windows.main.send('on-open-file', filePaths);
  });
}

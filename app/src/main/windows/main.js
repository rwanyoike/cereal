const main = module.exports = {
  init,
  send,
  toggleFullScreen,
  win: null,
};

const electron = require('electron');

const BrowserWindow = electron.BrowserWindow;

function init(config) {
  if (main.win) {
    main.win.show();
    return;
  }

  const win = main.win = new BrowserWindow({
    title: config.name,
    show: false,
    minWidth: 400,
    minHeight: 300,
    width: 800,
    height: 600,
  });

  win.loadURL(config.url);

  if (process.env.NODE_ENV === 'development') {
    const installExtension = require('electron-devtools-installer');

    installExtension.default(installExtension.VUEJS_DEVTOOLS)
      .then(() => win.webContents.openDevTools())
      .catch(err => console.log('An error occurred: ', err));
  }

  win.once('ready-to-show', () => {
    win.show();
  });

  win.once('closed', () => {
    main.win = null;
  });

  console.log('mainWindow opened');
}

function send(...args) {
  if (!main.win) return;
  main.win.send(...args);
}

function toggleFullScreen() {
  if (!main.win) return;
  const flag = !main.win.isFullScreen();
  main.win.setFullScreen(flag);
}

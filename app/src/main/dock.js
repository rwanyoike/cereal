module.exports = {
  init,
};

const electron = require('electron');

const dialog = require('./dialog');

const app = electron.app;
const Menu = electron.Menu;

function init() {
  const template = getMenuTemplate();
  const menu = Menu.buildFromTemplate(template);
  app.dock.setMenu(menu);
}

function getMenuTemplate() {
  return [
    {
      label: 'Open...',
      accelerator: 'Cmd+O',
      click: () => dialog.doPickAndOpen(),
    },
  ];
}

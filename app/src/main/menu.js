module.exports = {
  init,
};

const electron = require('electron');

const dialog = require('./dialog');
const windows = require('./windows');

const Menu = electron.Menu;

function init(config) {
  const template = getMenuTemplate(config);
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

function getMenuTemplate(config) {
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Open...',
          accelerator: 'Cmd+O',
          click: () => {
            dialog.doPickAndOpen();
          },
        },
        {
          label: 'Open Recent',
          submenu: [],
        },
        {
          type: 'separator',
        },
        {
          role: 'close',
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        {
          role: 'cut',
        },
        {
          role: 'copy',
        },
        {
          role: 'paste',
        },
        {
          role: 'selectall',
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Right to Left',
          accelerator: 'Cmd+D',
        },
        {
          label: 'Image Scaling',
          submenu: [
            {
              label: 'Original Size',
              accelerator: 'Cmd+1',
            },
            {
              label: 'Scale to Window',
              accelerator: 'Cmd+2',
            },
            {
              label: 'Scale to Width',
              accelerator: 'Cmd+3',
            }],
        },
        {
          label: 'Two Page Spread',
          accelerator: 'Cmd+P',
        },
        {
          type: 'separator',
        },
        {
          label: 'Thumbnail Exposé',
          accelerator: 'Cmd+T',
        },
        {
          label: 'Image Loupe',
          accelerator: 'Cmd+U',
        },
        {
          type: 'separator',
        },
        {
          label: 'Toggle Full Screen',
          accelerator: 'Ctrl+Cmd+F',
          click: () => {
            windows.main.toggleFullScreen();
          },
        },
        {
          type: 'separator',
        },
        {
          role: 'zoomin',
        },
        {
          role: 'zoomout',
        },
        {
          role: 'resetzoom',
        },
        {
          type: 'separator',
        },
        {
          label: 'Rotate Left',
          accelerator: 'Cmd+L',
        },
        {
          label: 'Rotate Right',
          accelerator: 'Cmd+R',
        },
        {
          label: 'No Rotation',
        },
      ],
    },
    {
      label: 'Help',
      role: 'help',
      submenu: [],
    },
  ];

  if (process.platform === 'darwin') {
    template.unshift({
      label: config.name,
      submenu: [
        {
          role: 'about',
        },
        {
          type: 'separator',
        },
        {
          label: 'Preferences',
          accelerator: 'Cmd+,',
        },
        {
          type: 'separator',
        },
        {
          role: 'services',
          submenu: [],
        },
        {
          type: 'separator',
        },
        {
          role: 'hide',
        },
        {
          role: 'hideothers',
        },
        {
          role: 'unhide',
        },
        {
          type: 'separator',
        },
        {
          role: 'quit',
        },
      ],
    });

    template.splice(4, 0, {
      role: 'window',
      submenu: [
        {
          role: 'minimize',
        },
        {
          type: 'separator',
        },
        {
          role: 'front',
        },
      ],
    });
  }

  return template;
}

'use strict';


const {app, BrowserWindow, Menu} = require('electron')

var mainWindow = null;

var template = [{
  label: "Application",
    submenu: [
    { label: "Quit", accelerator: "CmdOrCtrl+Q", click: function() { app.quit(); }}
  ]
}, {
  label: "Edit",
    submenu: [
    { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
    { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
    { type: "separator" },
    { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
    { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
    { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
    { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
  ]
}
];



app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(url);

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  mainWindow.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('shell').openExternal(url);
  });
});

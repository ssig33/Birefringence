'use strict';



var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(url);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  mainWindow.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('shell').openExternal(url);
  });

});

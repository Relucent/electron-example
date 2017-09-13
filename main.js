var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

//保持一个对于 window 对象的全局引用
var win;

//创建浏览器窗口。
function createWindow() {
	win = new BrowserWindow({
		width : 500,
		height : 300
	});

	// 加载应用的 index.html。
	win.loadURL('file://' + __dirname + '/index.html');

	// 打开开发者工具。
	win.webContents.openDevTools();

	// 当 window 被关闭，这个事件会被触发。
	win.on('closed', function() {
		// 取消引用 window 对象
		win = null;
	});
}

//Electron 会在初始化后调用这个函数。
app.on('ready', createWindow);

//当全部窗口关闭时退出。
app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function() {
	// 在这文件，你可以续写应用剩下主进程代码。
	if (win === null) {
		createWindow();
	}
});
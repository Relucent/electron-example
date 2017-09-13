Electron 应用

一个 Electron 应用的目录结构如下：  

	your-app/
	 ├ index.html
	 ├ main.js
	 └ package.json
  
其中package.json 的格式和 Node 的完全一致， main字段声明的脚本文件是应用的启动脚本，它运行在主进程上。  

	{
	  "name"    : "your-app",
	  "version" : "0.1.0",
	  "main"    : "main.js"
	}

(如果没有定义 main，Electron会优先加载 index.js)


运行应用  

	electron .


使用 Electron 部署你的应用程序，需要下载 Electron 的prebuilt binaries

	npm install electron-prebuilt --save-dev

存放应用程序的文件夹需要叫做 app 并且需要放在 Electron 的 资源文件夹下（在 macOS 中是指 Electron.app/Contents/Resources/，在 Linux 和 Windows 中是指 resources/） ：

在 macOS 中:  

	electron/Electron.app/Contents/Resources/app/
	├─ package.json
	├─ main.js
	└─ index.html

在 Windows 和 Linux 中:  

	electron/resources/app
	├─ package.json
	├─ main.js
	└─ index.html


程序打包成一个文件  
可以通过打包你的应用程序为一个 asar 库文件以避免暴露源代码。
为了使用一个 asar 库文件代替 app 文件夹，需要修改这个库文件的名字为 app.asar ， 然后将其放到 Electron 的资源文件夹下，然后 Electron 就会试图读取这个库文件并从中启动。 如下所示：
	
在 macOS 中:  

	electron/Electron.app/Contents/Resources/
	└─ app.asar

在 Windows 和 Linux 中:  

	electron/resources/
	└─ app.asar

	

	npm run-script build:win64

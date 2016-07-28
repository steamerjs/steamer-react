# React Web Starter Kit

## 简介
此分支是react web快速启动分支
目前用于QQ家校群、QQ群视频、QQ花样直播
直出分支: [react-isomorphic](https://github.com/SteamerTeam/steamer-react/tree/react-isomorphic)

## 文章参考
* [React移动web极致优化](https://github.com/lcxfs1991/blog/issues/8)
* [webpack使用优化（基本篇）](https://github.com/lcxfs1991/blog/issues/2)
* [webpack使用优化（react篇）](https://github.com/lcxfs1991/blog/issues/7)

## 配置介绍
目前主要的构建配置都放在tools文件夹下，它们的作用分别如下：
* sprite-template     合图时使用的样式模板，提供了sass和less两种
* config.js           构建自身的一些配置，例如路径、服务器端口等
* gupfile.js          合图的配置
* utils.js            构建自身使用的一些util函数
* webpack.config.js   webpack配置总入口，用于区分开发与生产环境
* webpack.dev.js      webpack开发环境配置
* webpack.pub.js 	  webpack生产环境配置
* webpack.server.js   webpack开发环境服务器，会引用开发环境配置

配合package.json的scripts命令，可以方便用简单命令启动开发及生产环境。

## 特性
### 支持多页面开发
基于灵活性的考虑，我们采用了自研的[html-res-webpack-plugin](https://github.com/lcxfs1991/html-res-webpack-plugin)插件。目前借助`utils.getHtmlFile`方法，自动扫描html文件。除此以外，若需要注入js, css等资源，需要在`config.webpack.htmlres`分别写入开发与生产环境的资源注入配置。更多配置可参考插件文档。


### 默认支持Less而非Sass
之前使用scss进行合图，以及样式的编写，但由于在windows下安装Node实际太麻烦，因此使用了更轻量的Less进行替换。
若想使用Sass，可自行添加[sass-loader](https://github.com/jtangelder/sass-loader)和[node-sass](https://github.com/sass/node-sass)及进行相关配置


### 支持多幅合图
请统一将合图样式放在`src/page/xxx/container/xxx.less`中，可参考src/page/index里面的做法。由于路径问题，如果放在其它地方会发生报错，因此强制约定（确实不太好）。

目前构建已经支持多个合图。只需要在src/img/sprites/下面新建文件夹，然后放在需要合的图，就会自动在src/css/文件夹下生成sprites/文件夹，里面包含了对应的合图和less文件。

### 开发环境支持转发
为了方便调，在`webpack.server.js`中有使用代理模块。

例如如果想转发前端的资源到`/news/`目录下，可以这样写：
`app.use('/news/', proxy('http://localhost:' + port));`

如果想转发后代的接口，使之置于同域之下，可以这么写：
`app.use('/api/', proxy('http://localhost:3001'));`


### [Redux Devtools](https://github.com/gaearon/redux-devtools)
目前在开发环境可以使用Redux Devtools。可以在`src/page/xxx/constatns/constants.js`中的DEBUG里控制开关。

* <kbd>ctrl</kbd> <kbd>+</kbd> h进行切换
* <kbd>ctrl</kbd> <kbd>+</kbd> q切换位置

其它命令可以参考`src/page/common/devtools/DevTools.js`可以调defaultSize设置自己喜欢的大小。目前默认设置在底部，占30%的屏幕大小。


### 支持开发环境与生产环境分离
#### 文件目录
* 单页文件可参考 src/page/index
* 单页应用可参考 src/page/spa
* 开发环境一般都写在内存，如果生产文件，会放到dev文件夹下
* 生产环境最终文件生成在pub文件夹下

#### 命令使用
package.json中的scripts，若是Windows，设置环境请用set，若是Mac，设置环境请使用export，如：
* Mac => `export NODE_ENV=__PROD__`
* Window => `set NODE_ENV=__PROD__`
目前在`package.json`里多添加了一个win-scripts项目方便直接修改成scripts使用

#### 后台服务
由于spa的详情页需要后台数据，因此如果你需要查看完整的spa.html的demo，需要使用后台服务。
我们使用[steamer-koa](https://github.com/SteamerTeam/steamer-koa)。

#### 开发环境
* react文件夹下启动：`npm run dev`

* 腾讯新闻主页:
  - `localhost:9000/index.html` 
  - `localhost:9000/news/index.html` (`webpack.server.js`里映射路径到news)

* 腾讯新闻主页spa:
  - `localhost:9000/spa.html`
  - `localhost:9000/news/spa.html`


#### 生产环境
* react文件夹下启动: `npm run pub`

* 代理配置
* Charles Map Local: 
  - `localhost:9000` => `/react/pub/` 匹配本地html资源
  - `localhost:8000` => `/react/pub/` 匹配本地除cdn资源 

// 此处是为了使spa的详情页能获得数据，如果不需要看详情页，可以不需要配置
* Charles Map Remote: 
  - `localhost:9000/api/*` => `localhost:3000/api/`

* Fiddler Willow Rule:
 - `regex:^https?:\/\/localhost:9000\/(.*)$`    `\local path\pub\$1`
 - `regex:^https?:\/\/localhost:8000\/(.*)$`    `\local path\pub\$1`

// 此处是为了使spa的详情页能获得数据，如果不需要看详情页，可以不需要配置
* Fiddler Willow Extension:
 - `localhost:9000/api/` => `localhost:3000/api/`
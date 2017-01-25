# steamer-react
efficient react starter kit


## 使用

```javascript
// 安装依赖
npm i

// 开发
npm start
// 打开链接
localhost:9000

// 代码规范安装
npm i -g eslint
npm i -g stylelint
// 代码规范扫描
npm lint

// 生产代码生成
npm run dist

```


## 基本配置

打开 config/project.js进行以下基本配置:

```javascript
* `config.webserver`  html的链接
* `config.cdn`  cdn的链接
* `config.port`  开发环境服务器端口
* `config.route` 开发环境访问的路径
```


## 目录结构

```javascript
.steamer -- steamer配置
dist    -- 生产环境代码
|
src     -- 源代码
|——————css -- 公共样式
|      |—— common 公共样式
|      |—— sprites 生成的合图样式及图片
|      |
|——————img
|      |——sprits 合图原图片
|      |    |———— btn
|      |    |———— list
|      |
|      js -- 公共js目录
|      |—— common 公共js
|      |
|      libs -- 公共js库，如react, preact等
|      |
|      |
|      page —— 页面逻辑
|      |
|      |—— common 公共页面逻辑
|      |—— index 首页逻辑
|      |
|      |
|------favicon.ico
|      |
|      |
config -- 项目配置
|------project.js -- 项目配置，主要被webpack等使用
|------steamer.config.js -- 可由steamer生成，包括webserver, cdn, port, route等
|      |
|      |
tools  -- 构建工具
|      |
|——————sprite-template -- 用于合图生成样式的模板
|——————dist.js -- 生产环境执行命令
|——————start.js -- 开发环境执行命令
|——————webpack.dev.js -- webpack开发环境配置
|——————webpack.prod.js -- webpack生产环境配置
|——————webpack.server.js -- webpack开发环境服务器配置
```


## 新建页面和页面相关逻辑
starter-kit已支持多个入口js文件，并借助`getJsFile`方法，根据约定，自动扫描js相关文件。具体调用在`config/project.js`中，目前约定是`src/page/xxx/main.js`此类js文件。你也可以不借助这个能力，自己在`webpack.dev.js`和`webpack.prod.js`中设定。

新建`html`文件，则直接在`src`目录下新建即可，注意html文件名和主逻辑js所在文件夹名相同。如`index.html`和`src/page/index`


## 多页面开发
采用了以下自研的插件
* [html-res-webpack-plugin](https://github.com/lcxfs1991/html-res-webpack-plugin)
* [copy-webpack-plugin-hash](https://www.npmjs.com/package/copy-webpack-plugin-hash)
* [extract-text-webpack-plugin-steamer](https://www.npmjs.com/package/extract-text-webpack-plugin-steamer)

目前借助[steamer-webpack-util](https://github.com/SteamerTeam/steamer-webpack-utils)中的 `getHtmlFile`方法，自动扫描html文件。除此以外，若需要注入js, css等资源，可借助[html-res-webpack-plugin](https://github.com/lcxfs1991/html-res-webpack-plugin)插件的能力，既可以使用以前的替换匹配的方式，也可以进行配置。更多配置可参考插件文档。

如果entry是js/index：

```javascript
entry: {
  "js/index": path.resolve("src/page/js/index")
}
```

那么你可以这样配置js和css文件：

```html
<link rel="stylesheet" href="js/index">
<script src="js/index"></script>
```

如果你使用[copy-webpack-plugin-hash](https://www.npmjs.com/package/copy-webpack-plugin-hash)插件复制js库，那么你可以这样配置：

```html
<script src="libs/react"></script>
```


## 自定义选择 entry chunk 和 html 文件
借助[steamer-webpack-util](https://github.com/SteamerTeam/steamer-webpack-utils)中的 `filterHtmlFile` 和 `filterJsFile` 方法，可以对由 `getJsFile` 和 `getHtmlFile` 生成的 js 或 html 文件进行选择。

如，选择 `index` 名称的 `html` 文件

```javascript
// configWebpack.html 是来自 config/project.js 中的配置
utils.filterHtmlFile(configWebpack.html, ['index'])
```

如，选择 `js/index` chunk 名的 `js` 文件 

```javascript
// configWebpack.entry 是来自 config/project.js 中的配置
utils.filterJsFile(configWebpack.entry, ["js/index"])
```


## 默认支持Less而非Sass
之前使用Sass进行合图，以及样式的编写，但由于在windows下安装`node-sass`实际太麻烦，因此使用了更轻量的Less进行替换。
若想使用Sass，可自行添加[sass-loader](https://github.com/jtangelder/sass-loader)和[node-sass](https://github.com/sass/node-sass)及进行相关配置。

由于在`less-loader`处设置了`root=path.resolve("src")`的`query`，因此若想引入在组件中引用src/css/中的样式文件，可以使用:
```css
@import "/css/common/common.less";
```

若想引入node_modules中的样式文件，可以使用：
```css
@import "~steamer-responsive/index.less";
```


## 支持多幅合图
目前构建已经支持多个合图。只需要在src/img/sprites/下面新建文件夹，然后放在需要合的图，就会自动在src/css/文件夹下生成sprites/文件夹，里面包含了对应的合图和less文件。

现在，你不用再统一将合图样式放在`src/page/xxx/container/xxx.less`中，你可以在需要的时候，在组件对应的less样式文件中引入便可，可参考`src/page/index`里面的做法。如下：
```css
@import "/src/css/sprites/sprite-list.less";
```


## 支持路由管理
starter-kit使用官方推荐的`react-router-redux`和`react-router`进行路由管理，可参考`src/page/spa`文件夹。


## Redux开发工具
[Redux Devtools](https://github.com/gaearon/redux-devtools)
目前在开发环境可以使用Redux Devtools。可以在`src/page/xxx/constatns/constants.js`中的DEBUG里控制开关，`true`表示开启，`false`表示关闭。

* <kbd>ctrl</kbd> <kbd>+</kbd> h进行切换
* <kbd>ctrl</kbd> <kbd>+</kbd> q切换位置

其它命令可以参考`src/page/common/devtools/DevTools.js`可以调defaultSize设置自己喜欢的大小。目前默认设置在底部，占30%的屏幕大小。


## 支持preact轻量类react框架
由于某些需求如运营活动可能需要比较轻量的框架，因此starter-kit也支持`preact`。目前，默认有`preact`相关引入的文件，都需要在文件顶部加上`/** @jsx h */`才能正常编译。具体可参考`src/page/pindex`文件夹，或到`preact`[官方网站](https://preactjs.com/)参考文档。


## 开发环境支持转发
为了方便调试，在`webpack.server.js`中有使用代理模块。

如果想转发前端的资源到`/news/`目录下，可以这样写：
`app.use('/news/', proxy('http://localhost:' + port));`

如果想转发后代的接口，使之置于同域之下，可以这么写：
`app.use('/api/', proxy('http://localhost:3001'));`


## 支持开发环境与生产环境分离

### 文件目录
* 单页文件可参考 src/page/index
* 单页应用可参考 src/page/spa
* 开发环境一般都写在内存，如果生产文件，会放到dev文件夹下
* 生产环境最终文件生成在dist文件夹下


### 开发环境
* 启动：`npm start`

* 腾讯新闻主页:
  - `localhost:9000/index.html` 
  - `localhost:9000/news/index.html` (`webpack.server.js`里映射路径到news)

* 腾讯新闻主页spa:
  - `localhost:9000/spa.html`
  - `localhost:9000/news/spa.html`


### 生产环境
* 启动: `npm run dist`

* 代理配置
* Charles Map Local: 
  - `localhost:9000` => `/dist/` 匹配本地html资源
  - `localhost:8000` => `/dist/` 匹配本地除cdn资源 

* Fiddler Willow Rule:
 - `regex:^https?:\/\/localhost:9000\/(.*)$`    `\local path\dist\$1`
 - `regex:^https?:\/\/localhost:8000\/(.*)$`    `\local path\dist\$1`

 * 腾讯新闻主页:
  - `localhost:9000/index.html` 

* 腾讯新闻主页spa:
  - `localhost:9000/spa.html`


## 文章参考
* [React移动web极致优化](https://github.com/lcxfs1991/blog/issues/8)
* [webpack使用优化（基本篇）](https://github.com/lcxfs1991/blog/issues/2)
* [webpack使用优化（react篇）](https://github.com/lcxfs1991/blog/issues/7)
* [webpack Performance: The Comprehensive Guide](https://github.com/lcxfs1991/blog/issues/15)
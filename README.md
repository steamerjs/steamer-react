# React Isomorphic Starter Kot
此分支是react同构的快速启动分支。 react web分支: [react分支](https://github.com/SteamerTeam/steamer-react/tree/react)


# 文章参考
[腾讯新闻React同构直出优化实践](https://github.com/lcxfs1991/blog/issues/10)

# web开发

## 命令环境
package.json中的scripts，若是Windows，设置环境请用set，若是Mac，设置环境请使用export，如：
* Mac => `export NODE_ENV=__DEV__`
* Window => `set NODE_ENV=__DEV__`
目前在`package.json`里多添加了一个win-scripts项目方便直接修改成scripts使用

## 开发环境
* react文件夹下启动：`npm run dev`
* react文件夹下启动: `npm start`

腾讯新闻主页:
* `localhost:9000/index.html` 
* `localhost:9000/news/index.html` (`webpack.server.js`里映射路径到news)

腾讯新闻spa页:
* `localhost:9000/spa.html`
* `localhost:9000/news/spa.html`


## 生产环境
* react文件夹下启动: `npm run pub`
* react文件夹下启动: `npm start`

### 代理配置
#### Charles:
#### Map Local: 
* `localhost:9000` => `/react/pub/` 匹配本地html资源
* `localhost:8000` => `/react/pub/` 匹配本地除cdn资源 

#### Map Remote: 
* `localhost:9000/api/*` => `localhost:3000/api/`

#### Fiddler:
#### Rule
rule:
regex:`^https?:\/\/localhost:9000\/(.*)$`    `\local path\pub\$1`
regex:`^https?:\/\/localhost:8000\/(.*)$`    `\local path\pub\$1`


# 直出
## 建议全局安装node-dev
[node-dev](https://www.npmjs.com/package/node-dev)用于后台服务启动，具体命令写在`pacakge.json`的`scripts`中

## 开发环境
* react文件夹下启动: `npm run dev-node` => 后台服务相关
* react文件夹下启动: `npm run dev-node-static`  => cdn资源
* recat文件夹下启动: `npm run start`
* react直出后台逻辑主要在`react/node/asset/index.j`s中，生成文件在`react/pub/node/app.js`
cdn资源生成`react/dist/`中。
* 列表页、详情页、留言页都可以以spa或者直出的形式访问

腾讯新闻spa页:
* `http://localhost:3001/spa`

### 代理配置
#### Charles:
#### Map Local
* localhost:3001 => /react/dist/ 匹配本地除html资源 
* localhost:9000/*.js => /react/dist 匹配本地除cdn资源 

#### Fiddler:
#### Rule
rule:
regex:`^https?:\/\/localhost:3001\/(.*[.js|.css])$`    `\local path\dist\$1`


## 生产环境
* react文件夹下启动: `npm run pub-node`
* react文件夹下启动: `npm run start`
* 生成内容都在`react/pub/`中
* 列表页、详情页、留言页都可以以spa或者直出的形式访问

### 代理配置
#### Charles:
#### Map Local: 
* `localhost:8000` => `/react/pub/` 匹配本地除cdn资源 

#### Map Remote: 
* `localhost:9000/api/*` => `localhost:3000/api/`

#### Fiddler:
#### Rule
rule:
`regex:^https?:\/\/localhost:8000\/(.*)$`    `\local path\pub\$1`

# 端口占用
* 9000 webpack开发时占用，用于hot reload，以及做proxy，可指向服务端
* 3001 koa服务器端占用

# 多个页面的开发
添加html到src/目录下就可以了，现在steamer-react会自动识别

# Devtools
* <kbd>ctrl</kbd>+<kbd>h</kbd>进行切换
* <kbd>ctrl</kbd>+<kbd>q</kbd>切换位置

其它命令可以参考`src/page/common/DevTools`。可以调defaultSize设置自己喜欢的大小。目前默认设置在底部，占30%的屏幕大小。

# 文件目录
* 单页面文件可参考 `src/page/index`
* 单页应用可参考 `src/page/spa`


# 合图代码
请统一放在 `src/page/xxx/container/xxx.scss`中，可参考`src/page/index`里面的做法。
这里的问题囿于插件局限性，之后建议找更好的插件，或者我们自己写一个。

目前构建已经支持多个合图。只需要在`src/img/sprites/`下面新建文件夹，然后放在需要合的图，就会自动在`src/css/`文件夹下生成`sprites/`文件夹，里面包含了对应的合图和scss。

# Windows下node-sass的安装
在node版本大于或等于4.0的环境下，调用`npm rebuild node-sass` 时会自动安装“node-gyp”模块。window下的“node-gyp”模块需要以下配置：

* [Python(v2.7)](https://www.python.org/ftp/python/2.7.9/python-2.7.9.amd64.msi)
* [Microsoft Visual Studio C++ 2013](https://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-desktop)
* 如果Visual Studio 2013不行，可尝试[Visual Studio 2010](https://github.com/nodejs/node-gyp/wiki/Visual-Studio-2010-Setup)

# 更多使用办法
* 可参考webpack的官方文档
* [webpack使用优化（基本篇）](https://github.com/lcxfs1991/blog/issues/2)
* [webpack使用优化（react篇）](https://github.com/lcxfs1991/blog/issues/7)

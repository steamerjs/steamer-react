# 同构直出分支
[react-isomorphic](https://github.com/SteamerTeam/steamer-react/tree/react-isomorphic)

# 文章参考
[React移动web极致优化](https://github.com/lcxfs1991/blog/issues/8)

# web开发

## 命令环境
package.json中的scripts，若是Windows，设置环境请用set，若是Mac，设置环境请使用export，如：
* Mac => `export NODE_ENV=production`
* Window => `set NODE_ENV=production`
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


## 后台服务
由于详情页需要后台数据，因此如果你需要查看完整的spa.html的demo，需要使用后台服务。
我们使用[steamer-koa](https://github.com/SteamerTeam/steamer-koa)。
* 先全局安装[node-dev](https://www.npmjs.com/package/node-dev)
* 在`steamer-koa`下使用npm start启动


# 多个页面的开发
添加html到src/目录下就可以了，现在steamer-react会自动识别


# Devtools
* <kbd>ctrl</kbd> <kbd>+</kbd> h进行切换
* <kbd>ctrl</kbd> <kbd>+</kbd> q切换位置

其它命令可以参考src/page/common/DevTools。可以调defaultSize设置自己喜欢的大小。目前默认设置在底部，占30%的屏幕大小。

# 文件目录
* 单页文件可参考 src/page/index
* 单页应用可参考 src/page/spa
* npm run pub最终文件生成在pub文件夹下


# 合图代码
请统一放在 src/page/xxx/container/xxx.scss中，可参考src/page/index里面的做法。
这里的问题囿于插件局限性，之后建议找更好的插件，或者我们自己写一个。

目前构建已经支持多个合图。只需要在src/img/sprites/下面新建文件夹，然后放在需要合的图，就会自动在src/css/文件夹下生成sprites/文件夹，里面包含了对应的合图和scss。

# Windows下node-sass的安装
在node版本大于或等于4.0的环境下，调用`npm rebuild node-sass` 时会自动安装“node-gyp”模块。window下的“node-gyp”模块需要以下配置：

* [Python(v2.7)](https://www.python.org/ftp/python/2.7.9/python-2.7.9.amd64.msi)
* [Microsoft Visual Studio C++ 2013](https://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-desktop)
* 如果Visual Studio 2013不行，可尝试[Visual Studio 2010](https://github.com/nodejs/node-gyp/wiki/Visual-Studio-2010-Setup)

# 更多使用办法
* 可参考webpack的官方文档
* [webpack使用优化（基本篇）](https://github.com/lcxfs1991/blog/issues/2)
* [webpack使用优化（react篇）](https://github.com/lcxfs1991/blog/issues/7)

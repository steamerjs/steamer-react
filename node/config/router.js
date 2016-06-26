const router = require('koa-router');
const view = require('../controller/controller');

//路由处理，首页指定用index函数处理，但需要先经过validate函数校验
var API = new router();

API.get('/api/', view.index)
   .get('/api/getQQNewsDetail/', view.detail)
   .post('/api/getQQNewsDetail/', view.detail)
   .get('/api/getQQNewsIndexAndItems/', view.list)
   .post('/api/getQQNewsIndexAndItems/', view.list)
   .get('/api/GET_COMMENT_LIST/', view.comment)
   .post('/api/GET_COMMENT_LIST/', view.comment)
   .get('/spa', view.spa)
   .get('/spa/detail/:newsid/:commentid', view.spaDetail)
   .get('/spa/comment/:commentid', view.spaComment);

exports.RULE  = API.middleware();

const { verify } = require('jsonwebtoken');
const Router = require('koa-router');

const articleRouter = new Router({prefix: '/article'});

const {
  create,
  detail,
  list,
  update,
  remove,
  addLabels,
  // fileInfo
} = require('../controller/article.controller.js');
const {
  verifyAuth,
  verifyPermission
} = require('../middleware/auth.middleware');
const {
  verifyLabelExists
} = require('../middleware/label.middleware');

articleRouter.post('/create', verifyAuth, create);

articleRouter.get('/list', list);
articleRouter.get('/:articleId', detail);

// 1.用户必须登录 2.用户具备权限
articleRouter.patch('/:articleId', verifyAuth, verifyPermission, update);
articleRouter.delete('/:articleId', verifyAuth, verifyPermission, remove);

// 给动态添加标签
articleRouter.post('/:articleId/labels', verifyAuth, verifyPermission, verifyLabelExists, addLabels);

// 动态配图的服务
// articleRouter.get('/images/:filename', fileInfo);

module.exports = articleRouter;

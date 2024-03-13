// 注册用户

const Router = require('koa-router');
const {
  create,
  avatarInfo
} = require('../controller/user.controller');
const {
  verifyUser,
  handlePassword
} = require('../middleware/user.middleware');

const userRouter = new Router({prefix: '/users'}); // 前缀

userRouter.post('/', verifyUser, handlePassword, create);
userRouter.get('/:userId/avatar', avatarInfo);

module.exports = userRouter;

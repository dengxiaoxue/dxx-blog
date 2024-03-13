const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const errorHandler = require('./error-handle');
const useRoutes = require('../router');

const app = new Koa();

app.useRoutes = useRoutes;

app.use(bodyParser()); // 解析请求数据
app.useRoutes(); // 请求路径映射
app.on('error', errorHandler);

module.exports = app;
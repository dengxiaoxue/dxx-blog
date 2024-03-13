const fs = require('fs');


const useRoutes = function() {
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') return;
    const router = require(`./${file}`);
    this.use(router.routes());
    this.use(router.allowedMethods()); // 判断当前请求方式有无，没有的话会返回不支持
  })
}

module.exports = useRoutes;

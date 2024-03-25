const url = require('url');

// const fileService = require('../service/file.service');
const ArticleService = require('../service/article.service');
// const { PICTURE_PATH } = require('../constants/file-path');

class ArticleController {
  async create(ctx, next) {
    // 1.获取数据(user_id, content)
    const userId = ctx.user.id;
    const content = ctx.request.body.content;
    const description = ctx.request.body.description;
    const title = ctx.request.body.title;

    // 2.将数据插入到数据库
    const result = await ArticleService.create(userId, content, description, title);
    ctx.body = result;
  }

  async detail(ctx, next) {
    // 1.获取数据(articleId)
    const articleId = ctx.params.articleId;

    // 2.根据id去查询这条数据
    const result = await ArticleService.getArticleById(articleId);
    ctx.body = result;
  }

  async list(ctx, next) {
    // 1.获取数据(offset/size)
    let { pageIndex, pageSize } = ctx.query
    pageIndex = Number(pageIndex)
    pageSize = Number(pageSize)
    
    const offset = pageIndex ? (pageIndex - 1) * pageSize : 0
    const size = pageSize ? pageSize : 20

    // 2.查询列表
    const result = await ArticleService.getArticleList(offset, size);
    ctx.body = {
      pageIndex,
      pageSize,
      total: result.total,
      data: result.result,
    };
  }

  async update(ctx, next) {
    // 1.获取参数
    const { articleId } = ctx.params;
    const { content } = ctx.request.body;

    // 2.修改内容
    const result = await ArticleService.update(content, articleId);
    ctx.body = result;
  }

  async remove(ctx, next) {
    // 1.获取articleId
    const { articleId } = ctx.params;

    // 2.删除内容
    const result = await ArticleService.remove(articleId);
    ctx.body = result;
  }

  async addLabels(ctx, next) {
    // 1.获取标签和动态id
    const { labels } = ctx;
    const { articleId } = ctx.params;

    // 2.添加所有的标签
    for (let label of labels) {
      // 2.1.判断标签是否已经和动态有关系
      const isExist = await ArticleService.hasLabel(articleId, label.id);
      if (!isExist) {
        await ArticleService.addLabel(articleId, label.id);
      }
    }

    ctx.body = "给动态添加标签成功~";
  }

  // async fileInfo(ctx, next) {
  //   let { filename } = ctx.params;
  //   const fileInfo = await fileService.getFileByFilename(filename);
  //   const { type } = ctx.query;
  //   const types = ["small", "middle", "large"];
  //   if (types.some(item => item === type)) {
  //     filename = filename + '-' + type;
  //   }

  //   ctx.response.set('content-type', fileInfo.mimetype);
  //   ctx.body = fs.createReadStream(`${PICTURE_PATH}/${filename}`);
  // }
}

module.exports = new ArticleController();
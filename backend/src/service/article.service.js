const connection = require('../app/database');

// const sqlFragment = `
//   SELECT 
//     m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
//     JSON_OBJECT('id', u.id, 'name', u.name) author
//   FROM article m
//   LEFT JOIN user u ON m.user_id = u.id
// `

class ArticleService {
  async create(userId, content, description, title) {
    const statement = `INSERT INTO article (content, user_id, description, title) VALUES (?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [content, userId, description, title]);
    return result;
  }

  async getArticleById(id) {
    const statement = `
      SELECT id, content, description,title, createAt, updateAt
      FROM article 
      WHERE id = ?
      GROUP BY id;  
    `;
    try {
      const [result] = await connection.execute(statement, [id]);
      return result[0];
    } catch (error) {
      console.log(error)
    }
  }

  async getArticleList(offset, size) {
    const statement = `
      SELECT id, title, description, createAt, updateAt FROM article LIMIT ${offset}, ${size};
    `;

    const statement2 = `
      SELECT COUNT(*) as total FROM article;
    `;

    const [result2] = await connection.execute(statement2);
    const [result] = await connection.execute(statement);
    return {result, total: result2[0].total};
  }
  

  async update(content, articleId, title, description) {
    const statement = `UPDATE article SET content = ?, title = ?, description = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [content, title, description, articleId]);
    return result;
  }

  async remove(articleId) {
    const statement = `DELETE FROM article WHERE id = ?`;
    const [result] = await connection.execute(statement, [articleId]);
    return result;
  }

  async hasLabel(articleId, labelId) {
    const statement = `SELECT * FROM article_label WHERE article_id = ? AND label_id = ?`;
    const [result] = await connection.execute(statement, [articleId, labelId]);
    return result[0] ? true: false;
  }

  async addLabel(articleId, labelId) {
    const statement = `INSERT INTO article_label (article_id, label_id) VALUES (?, ?);`;
    const [result] = await connection.execute(statement, [articleId, labelId]);
    return result;
  }
}

module.exports = new ArticleService();


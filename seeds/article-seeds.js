const { Article } = require('../models');

const articledata = [
  {
    title: 'Python or JavaScript?',
    content: 'Is that much of a question?',
    user_id: 1,
  },
  {
    title: 'Is font awesome the next white bread??',
    content: 'Potentially...',
    user_id: 2,
  },
];



const seedArticle = () => Article.bulkCreate(articledata);

module.exports = seedArticle;
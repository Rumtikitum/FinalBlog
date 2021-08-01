
const seedUser = require('./user-seeds');
const seedArticle = require('./article-seeds');
const seedComment = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  console.log('\n----- User TAGS SEEDED -----\n');

  await seedArticle();
  console.log('\n----- User TAGS SEEDED -----\n');


  await seedComment();
  console.log('\n----- User TAGS SEEDED -----\n');





  process.exit(0);
};

seedAll();
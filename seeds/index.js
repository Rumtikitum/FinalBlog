
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  console.log('\n----- User TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
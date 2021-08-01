const { User } = require('../models');

const userData = [
    {
        username: 'Rumtikitum',
        email: 'email@gmail.com',
        password: 'password'
    },
    {
        username: 'Rumtikitumz',
        email: 'email2@gmail.com',
        password: 'password'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
const { Comment } = require('../models');

const commentdata = [
  {
    comment: 'Uhh...no!',
    commenter_id: 1,
    post_id: 2,
  }, 
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
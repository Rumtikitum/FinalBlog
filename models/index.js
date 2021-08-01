const User = require('./User');
const Article = require('./Articles');
const Comment = require('./Comment');

User.hasMany(Article, {
  foreignKey: 'user_id',
  
});

Article.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'commenter_id',
    
});

Comment.belongsTo(User, {
    foreignKey: 'commenter_id'
});

Article.hasMany(Comment, {
    foreignKey: 'post_id',
    
});

Comment.belongsTo(Article, {
    foreignKey: 'post_id',
})


module.exports = { User, Article, Comment };
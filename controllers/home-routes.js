const router = require('express').Router();
const { User, Article } = require('../models/')
const sequelize = require('../config/connection');
//const { Post, User, Comment, Vote } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
    try {
        // Get all Articles and JOIN with user data
        const articledata = await Article.findAll({
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        });
    
        // Serialize data so the template can read it
        const articles = articledata.map((article) => article.get({ plain: true }));
    
        // Pass serialized data and session flag into template
        res.render('homepage', { 
          loggedIn: req.session.loggedIn,
          articles, 
        });
      } catch (err) {
        res.status(500).json(err);
      }
    })

router.get('/dashboard', async (req, res) => {

            res.render('homepage', { 
              loggedIn: req.session.loggedIn,
              articles, 
            });

};
        


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
      
    res.render('login');
    });


module.exports = router;
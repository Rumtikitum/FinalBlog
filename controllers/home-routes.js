const router = require('express').Router();
const {Item, Type} = require('../models/')
const sequelize = require('../config/connection');
//const { Post, User, Comment, Vote } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
  console.log('======================');
    res.render('homepage', {
        loggedIn: req.session.loggedIn
      });
    })

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
      
    res.render('login');
    });








module.exports = router;
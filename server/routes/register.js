var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/user');
var path = require('path');


// Handles request for HTML file
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/templates/register.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {
    Users.create(req.body, function(err, post) {
         if(err) {
           // next() here would continue on and route to routes/index.js
           next(err);
         } else {
          // route a new express request for GET '/'
          res.redirect('/');
         }
    });
});


module.exports = router;

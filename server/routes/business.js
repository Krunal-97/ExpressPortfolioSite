// File name: business.ejs
// Name: Krunal Parmar
// Student Id: 301146813
// Date: 23/02/2021
// ExpressPortfolio
// Copyright © 2021 Centennial College. All rights reserved.

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');
let businessController = require('../controllers/business');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Business List page - READ Operation */
router.get('/', businessController.displayBusinessList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, businessController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, businessController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, businessController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, businessController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, businessController.performDelete);

module.exports = router;
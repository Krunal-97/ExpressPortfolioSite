// File name: business.ejs
// Name: Krunal Parmar
// Student Id: 301146813
// Date: 23/02/2021
// ExpressPortfolio
// Copyright © 2021 Centennial College. All rights reserved.

let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
{
    collection: "businesses"
});

module.exports = mongoose.model('Business', businessModel);
const express = require('express');
//KS torikeshi -start
//const path = require('path');
//const router = new express.Router();
////KS torikeshi -end
const router = require("express").Router();
const booksController = require("../controllers/articleController");


let apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);
//KS torikeshi-start
//router.get('*', (req, res) => {
//    res.sendFile(path.join(__dirname, '../client/build/index.html'));
//    res.sendFile(path.join(__dirname, '../client/build/index.html'));
//});
//KS torikeshi--end
module.exports = router;

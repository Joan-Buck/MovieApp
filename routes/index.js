const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');


router.get('/', asyncHandler(async (req, res, next) => {
  const movies = await db.Movie.findAll({
    order: [ [ 'title', 'ASC' ] ]
  }); //ratings may be added in future

  res.render('index', { title: 'CinemAddict', movies })

}));

module.exports = router;

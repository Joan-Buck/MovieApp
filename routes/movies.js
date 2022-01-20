const express = require('express');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const router = express.Router();
const { signInUser, signOutUser, requireAuth } = require('../auth');

router.get('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    const movie = await db.Movie.findByPk(req.params.id, {
        include: db.Genre
    });
    const reviews = await db.Review.findAll({
        where: { movieId: req.params.id },
        include: db.User
    });
    res.render('movie-detail', { movie, reviews });
}));

router.post('/:movieId/addReview', asyncHandler(async(req, res) => {
    const { title, content } = req.body;
    console.log('==================',req.params.movieId)
    const newReview = await db.Review.create({
        title,
        content,
        movieId: req.params.movieId,
        userId: req.session.auth.userId
    })
    // res.json({ message: 'Success' });
    res.redirect('/');
}));


module.exports = router;

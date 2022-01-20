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

//========= Working route handler for creating a review ========
// router.post('/:movieId/addReview', asyncHandler(async(req, res) => {
//     const { title, content } = req.body;

//     const newReview = await db.Review.create({
//         title,
//         content,
//         movieId: req.params.movieId,
//         userId: req.session.auth.userId
//     })
//     // res.json({ message: 'Success' });
//     res.redirect('/');
// }));

// testing route handler to create a review with json
router.post('/:movieId/addReview', asyncHandler(async(req, res) => {
    const { title, content } = req.body;

    let user = await db.User.findByPk(req.session.auth.userId);

    const newReview = await db.Review.create({
        title,
        content,
        movieId: req.params.movieId,
        userId: req.session.auth.userId
    })
    res.json({ message: 'Success', username: user.username });
}));


module.exports = router;
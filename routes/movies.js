const express = require('express');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const router = express.Router();
const { signInUser, signOutUser, requireAuth } = require('../auth');

router.get('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    let userHasReview = false;

    const movie = await db.Movie.findByPk(req.params.id, {
        include: db.Genre
    });
    const reviews = await db.Review.findAll({
        where: { movieId: req.params.id },
        include: db.User
    });

    if(req.session.auth) {
    const userReview = await db.Review.findAll({
        where: {
            movieId: req.params.id,
            userId: req.session.auth.userId
        }
    });

    if(userReview.length > 0) {
        userHasReview = true;
    }
    }

    res.render('movie-detail', { movie, reviews, userHasReview });
}));


router.post('/:movieId/addReview', asyncHandler(async(req, res) => {
    const { title, content } = req.body;

    let user = await db.User.findByPk(req.session.auth.userId);

    const newReview = await db.Review.create({
        title,
        content,
        movieId: req.params.movieId,
        userId: req.session.auth.userId
    })
    res.json({ message: 'Success', username: user.username, review: newReview.id });
}));

router.delete('/reviews/:reviewId/delete', asyncHandler(async(req, res) => {
    const deleteReview = await db.Review.findByPk(req.params.reviewId);

    if (deleteReview) {
        await deleteReview.destroy();
        res.json({ message: 'Success', reviewId: req.params.reviewId, movieId: deleteReview.movieId})
    } else {
        res.json({ message: 'Failed' })
    }
}));



module.exports = router;

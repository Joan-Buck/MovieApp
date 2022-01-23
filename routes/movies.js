const express = require('express');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const router = express.Router();
const { signInUser, signOutUser, requireAuth } = require('../auth');
const { user } = require('pg/lib/defaults');

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    let userHasReview = false;

    const movie = await db.Movie.findByPk(req.params.id, {
        include: db.Genre
    });

    const reviews = await db.Review.findAll({
        where: { movieId: req.params.id },
        include: db.User,
        order: [['createdAt', 'DESC']]
    });

    if (req.session.auth) {
        const userReview = await db.Review.findAll({
            where: {
                movieId: req.params.id,
                userId: req.session.auth.userId
            }
        });

        if (userReview.length > 0) {
            userHasReview = true;
        }
    }

    res.render('movie-detail', { movie, reviews, userHasReview, title: `CinemAddict | ${movie.title}` });
}));

const reviewValidator = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please enter a title.')
        .isLength({ max: 50})
        .withMessage('Title cannot exceed 50 characters.'),
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please enter a review.')
        .isLength({ max: 500})
        .withMessage('Review cannot exceed 500 characters.'),
];

router.post('/:movieId/addReview', reviewValidator, asyncHandler(async (req, res, next) => {
    const { title, content } = req.body;

    const validatorErrors = validationResult(req);

    const movieName = await db.Movie.findByPk(req.params.movieId);

    if (validatorErrors.isEmpty()) {
        let user = await db.User.findByPk(req.session.auth.userId);
        try  {
            const newReview = await db.Review.create({
                title,
                content,
                movieId: req.params.movieId,
                userId: req.session.auth.userId
            })
            const errors = validatorErrors.array().map((error) => error.msg);
            res.json({ message: 'Success',
            username: user.username,
            review: newReview.id,
            errors: errors
    });
        } catch (e) {
            next(e);
        }
    } else {
        res.json({ message: 'Failed', username: user.username, review: newReview.id, errors: errors})
    }
}));

router.delete('/reviews/:reviewId/delete', asyncHandler(async (req, res) => {
    const deleteReview = await db.Review.findByPk(req.params.reviewId);

    if (deleteReview) {
        await deleteReview.destroy();
        res.json({ message: 'Success', reviewId: req.params.reviewId, movieId: deleteReview.movieId })
    } else {
        res.json({ message: 'Failed' })
    }
}));



module.exports = router;

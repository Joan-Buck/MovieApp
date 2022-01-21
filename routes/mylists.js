const express = require('express');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const router = express.Router();
const { signInUser, signOutUser } = require('../auth');


router.get('/add-movie/:movieId', asyncHandler(async (req, res) => {
    const movieId = req.params.movieId;

    let lists = await db.MyList.findAll({
        where: { userId: req.session.auth.userId },
        include: db.User
    })
    res.render('add-to-my-list', { lists, movieId });
}));

router.post('/add-to-list', asyncHandler(async (req, res) => {
    const { movieId, myListId } = req.body;

    const movieList = await db.MovieList.create({
        movieId,
        myListId
    });

    res.redirect(`/my-lists/${myListId}`)
}));

router.post('/:myListId/movies/:movieId', asyncHandler(async (req, res) => {
    const movieToRemove = await db.MovieList.findOne({
        where: {
            movieId: req.params.movieId,
            myListId: req.params.myListId
        }
    })
    movieToRemove.destroy();
    res.redirect(`/my-lists/${req.params.myListId}`)
}))


router.get('/', csrfProtection, asyncHandler(async (req, res) => {

    let lists = await db.MyList.findAll({
        where: { userId: req.session.auth.userId },
        include: db.User
    })

    res.render('my-list', { lists })
}))

const myListValidator = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please enter a new list name.')
        .isLength({ max: 50 })
        .withMessage('List name cannot exceed 50 characters.')
]


router.get('/new', csrfProtection, asyncHandler(async (req, res) => {
    res.render('new-list', {
        csrfToken: req.csrfToken()
    })
}));


router.post('/', csrfProtection, myListValidator, asyncHandler(async (req, res) => {
    const { name } = req.body;

    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
        const newListName = await db.MyList.create({
            userId: req.session.auth.userId,
            name
        });
        res.redirect('/my-lists');
    } else {
        const errors = validatorErrors.array().map((error) => error.msg)
        res.render('new-list', {
            title: 'Movie App | New List',
            name,
            errors,
            csrfToken: req.csrfToken()
        })
    }
}));


router.get('/:id', asyncHandler(async (req, res) => {

    const myList = await db.MyList.findByPk(req.params.id, {
        include: [db.Movie]
    });
    console.log('========', myList)

    res.render('list-detail', { myList });

}));

router.post('/:id/delete', asyncHandler(async (req, res) => {
    const deletedList = await db.MyList.findByPk(req.params.id);
    await deletedList.destroy();
    res.redirect('/my-lists');
}));




module.exports = router;

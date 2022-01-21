const express = require('express');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const router = express.Router();
const { signInUser, signOutUser } = require('../auth');

// get user's lists
router.get('/', csrfProtection, asyncHandler(async (req, res) => {
    // get the lists

    // let user = await db.User.findByPk(req.session.auth.userId);
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

// get new list form page
router.get('/new', csrfProtection, asyncHandler(async (req, res) => {
    res.render('new-list', {
        csrfToken: req.csrfToken()
    })
}));

// post new list
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


    // const movieListName = await db.MovieLists.create({
    //     // id, movieId, myListId
    //     movieId: , // how to get movieId db.Movie.id
    //     myListId: req.params.id
    // })
    // 1. add movie to list
    // 2. seed movie into MyList in db
    // a. seed movie into MovieLists
    // WHEN LIST IS CLICK ON:
    // 3. grab MovieList by myListId
    /*
    A, B, C
    MovieLists.movieId
    MovieLists.myListId

    */
    // 4. pug file:
    // display movie by movieId (clickable)

    // need movie name and movieId
}));

// get specific list
router.get('/:id', asyncHandler(async (req, res) => {
    //query for list where id matches req.id
    const myList = await db.MyList.findByPk(req.params.id);
    console.log(myList);
    // render a pug for a specific list
    res.render('list-detail', { myList });
    // query for movieLists where id = myList.id
    // may include movie & myList table
    //

}))

router.post('/:id/delete', asyncHandler(async (req, res) => {
    const deletedList = await db.MyList.findByPk(req.params.id);
    await deletedList.destroy();
    res.redirect('/my-lists');
}))

module.exports = router;

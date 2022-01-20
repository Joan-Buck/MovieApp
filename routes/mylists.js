const express = require('express');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const router = express.Router();
const { signInUser, signOutUser } = require('../auth');

// get user's lists
router.get('/', csrfProtection, asyncHandler(async(req, res) => {
    // get the lists

    // let user = await db.User.findByPk(req.session.auth.userId);
    let lists = await db.MyList.findAll( {
        where: { userId: req.session.auth.userId },
        include: db.User
    })

    res.render('my-list', { lists })
}))


// non dynamic
// next thing user will do is click new list
    // this event will redirect user to form page to add a new list
    // form page just has input for new list title
    // save new list title to DB
    // redirect back to /my-lists
// get new list form page
router.get('/new', csrfProtection,asyncHandler(async(req, res) => {
    res.render('new-list', {
        csrfToken: req.csrfToken()
    })
}));

// post new list
router.post('/', csrfProtection, asyncHandler(async(req, res) => {
    const { name } = req.body;

    const newListName = await db.MyList.create({
        userId: req.session.auth.userId,
        name
    })
    res.redirect('/my-lists');
}));

// get specific list
router.get('/:id', asyncHandler(async(req, res) => {
    //query for list where id matches req.id
    const myList = await db.MyList.findByPk(req.params.id);

    // render a pug for a specific list
    res.render('list-detail', { myList });
}))



module.exports = router;

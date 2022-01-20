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

module.exports = router;

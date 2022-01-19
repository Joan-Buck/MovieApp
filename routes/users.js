const express = require('express');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const router = express.Router();



/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', csrfProtection, (req, res) => {
  res.render('signup', {
    csrfToken: req.csrfToken(),
    title: 'Sign Up'
  })
});

const signupValidator = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a username')
    .isLength({ max: 50 })
    .withMessage('Username cannot exceed 50 characters.')
    .custom((value) => {
      return db.User.findOne({
        where: {
          username: value
        }
      })
        .then((user) => {
          if (user) {
            return Promise.reject('Username is already in use by another account.')
          }
        })
    }),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please enter an email')
    .isLength({ max: 50 })
    .withMessage('Email cannot exceed 50 characters.')
    .matches(/^[a-zA-Z0-9-_]*@[a-z]*\.[a-z]{2,3}$/, 'g')
    .withMessage('Must be a valid email address')
    .custom((value) => {
      return db.User.findOne({
        where: {
          email: value
        }
      })
        .then((user) => {
          if (user) {
            return Promise.reject('Email is already in use by another account.')
          }
        })
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a password')
    .isLength({ max: 50 })
    .withMessage('Password cannot exceed 50 characters.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),

  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please confirm password')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password values do not match!')
      }
      return true;
    })
];

router.post('/signup', csrfProtection, signupValidator, asyncHandler(async(req, res) => {
  const { username, email, password } = req.body;

  const user = db.User.build({
    username,
    email
  })
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 12);
    user.hashedPassword = hashedPassword;
    await user.save();
    // eventually log in uesr
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg)
    res.render('signup', {
      title: 'Sign Up',
      user,
      errors,
      csrfToken: req.csrfToken()
    })
  }
}))


module.exports = router;

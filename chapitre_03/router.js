const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');
router.use(express.urlencoded({ extended: true }))

//router.use(express.json());
const User =  require('./models/users')

router.get('/users', function (req, res) {
    res.render('userList')
})
router.get('/users/add', function (req, res) {
    res.render('userAddForm')
})
router.post(
    '/users',
    body('username').isLength({ min: 4 }),
    body('email').isEmail(),
    body('age').isFloat({min:10,max:99}),
    (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        res.render('formError')
      //return res.status(400).json({ errors: errors.array() });
    }
    Users.create({
      username: req.body.username,
      email: req.body.email,
      age: req.body.age,
      city: req.body.city
    }).then(users => res.json(users));
  },
);
router.get('/users/:username', function (req, res) {
    res.render('userProfile')
})


module.exports = router;

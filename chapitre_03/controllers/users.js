const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');
router.use(express.urlencoded({ extended: true }))

//router.use(express.json());
//const User =  require('./models/users')
const userlist = [];
const user = {
      username: "",
      email: "",
      age: 0,
      city: ""
};
router.get('/users', function (req, res) {
    console.log("i am here!");
    console.log(userlist);
    res.render('userList', {userlist});
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
    }else {
    const user = {
      username: req.body.username,
      email: req.body.email,
      age: req.body.age,
      city: req.body.city
    };
    userlist.push(user);
    //res.json(userlist);
    res.redirect('/users')
    }
  },
);
router.get('/users/:username', function (req, res) {
    res.render('userProfile')
})


module.exports = router;


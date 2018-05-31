// Import router extention & user Model
const router = require('express').Router();
const User = require('../models/userModel');

// Endpoint (1) Post User
router.post('/', (req, res) => {
    const userData = req.body;
    const user = new User(userData);

    user
        .save()
        .then(users => {
            res.status(201).json(users);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// Endpoint (2) Get All Users
router.get('/', (req, res) => {
    User.find().then(users => {
        res.status(200).json(users);
    });
});

// // Endpoint (3) Get Notes by Id
router.get('/:id', (req, res) => {
    const { id } = req.params;

    User.findById(id)
    .then(users => {
        res.status(202).json(users);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// Endpoint (4) Delete users by Id
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    User.findByIdAndRemove(id)
    .then(users => { 
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(404).json(err);
    });
});

// Endpoint (5) Edit Users by Id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    const options = {
        new: true,
    };

    User.findByIdAndUpdate(id, updatedUser, options).then(update => {
        res.status(200).json(update)
    }).catch(err => {
        res.status(500).json(err);
    });
})

module.exports = router;
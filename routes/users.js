const express = require('express');
const router = express.Router();


const { getUsers, postUser, getUser, deleteUser, updateUser } = require('../controllers/users');







router.get('/', getUsers);

router.post('/', postUser);


router.get('/:id', getUser)


router.delete('/:id', deleteUser)


router.patch('/:id', updateUser)

module.exports = router;
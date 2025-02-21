const express = require('express');
const router = express.Router();
const { uuid } = require('uuidv4');




let users = []

router.get('/', (req, res)=>{
    console.log(users);
    res.send(users);
})

router.post('/', (req, res)=>{
    const user = req.body
    
    users.push({...user, id: uuid()})

    console.log(users)
    res.status(201).send(`User with the name ${user.firstName} was added to the database`);
})


router.get('/:id', (req, res)=>{
    const { id }= req.params;


    const founduser= users.find((user)=> user.id === id);

    console.log(founduser)
    res.send(founduser);



})


router.delete('/:id', (req, res)=>{
    const {id} = req.params

    users = users.filter((user)=>user.id != id) 

    res.send(`User with the id ${id} has been deleted sucesfully`)
})

module.exports = router;
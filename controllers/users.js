const { v4} = require('uuid');
let users = []

const getUsers =  (req, res)=>{
    console.log(users);
    res.send(users);
};

const postUser=(req, res)=>{
    const user = req.body
    
    users.push({...user, id: v4()})

    console.log(users)
    res.status(201).send(`User with the name ${user.firstName} was added to the database`);
}

const getUser=(req, res)=>{
    const { id }= req.params;


    const founduser= users.find((user)=> user.id === id);

    console.log(founduser)
    res.send(founduser);



}

const deleteUser=(req, res)=>{
    const {id} = req.params

   users = users.filter((user)=>user.id != id) 

    res.send(`User with the id ${id} has been deleted sucesfully`)
}

 const updateUser =(req, res)=>{
    const {id} = req.params;
    const {firstName, lastName, age}= req.body;

    const user = users.find((user)=> user.id === id
    );


    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    if (age) user.age = age


    res.send(`User with the id ${id} has been updated`)
    

    
}

module.exports = { getUsers, postUser, getUser, deleteUser, updateUser };
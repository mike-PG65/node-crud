const express= require('express');


const app = express();
app.use(express.json());

const usersroutes = require('./routes/users.js');

app.use('/users', usersroutes)




const PORT= 3000;


app.listen (PORT, () => {
    console.log(`Server is running on port:http//localhost:${PORT}`)
})
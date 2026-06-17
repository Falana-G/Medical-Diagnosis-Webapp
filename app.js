const express = require('express');
const app = express();
const indexController = require('./controller/index.controller');

let port = 18455;

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


app.listen(port, (error)=>{
    if (error){
        console.log(error.message);
    }else{
        console.log("Server started on port: "+port);
    }
})
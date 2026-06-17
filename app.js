require('dotenv').config();
const express = require('express');
const app = express();
const indexController = require('./controller/index.controller');

let port = 18455;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) =>{
    res.render('home');
});

app.post('/analyze', async (req, res) => {

    console.log(req.body);

    res.json({
        success: true
    });

});

app.listen(port, (error)=>{
    if (error){
        console.log(error.message);
    }else{
        console.log("Server started on port: "+port);
    }
})
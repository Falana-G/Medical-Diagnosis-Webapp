require('dotenv').config();
const express = require('express');
const app = express();
const indexController = require('./controller/index.controller');
const { analyzePatient } = require('./services/geminiservices');

let port = 18455;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) =>{
    res.render('home');
});

app.post('/analyze', async (req, res) => {
    try {
        const result = await analyzePatient(req.body);
        res.json({
            success: true,
            result
        });
    } catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Analysis failed'
        });
    }
});


app.listen(port, (error)=>{
    if (error){
        console.log(error.message);
    }else{
        console.log("Server started on port: "+port);
    }
})
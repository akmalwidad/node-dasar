// use path module
const path = require("path");
//use express module
const express = require("express");
//use hbs view engine
const hbs = require("hbs");
//use middleware body-parder
const bodyParser = require("body-parser"); 
const app = express();



//set dynamic views file
app.set('views', path.join(__dirname, 'views'));
//set views engine
app.set('view engine', 'hbs');

//set middleware
app.use(bodyParser.urlencoded({ extended : false }));
//set public folder as static folder for static file
app.use(express.static('public'));
//route halaman home
app.get('/', (req, res)=>{
    //render file index.hbs
    res.render('index', {
        name: "Akmal Widad"
    });
});

//route untuk menampilkan form
app.get('/post', (req, res)=>{
    //render file form.hbs
    res.render('form');
});


// route halaman home dengan parameter name
app.post('/post', (req, res)=>{
    res.render('index',{
        //mengambil value dari form textname
        name : req.body.textname
    })
})

app.listen(8000, ()=>{
    console.log("server running at port 8000");
})
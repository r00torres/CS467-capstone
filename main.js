/*
Begining of single page application
Testing node and threejs

usual install required to get running - 
npm install

to run -
npm start (port 3000) || node main.js 3000 (port)

todo -
add testing... mocha, chai


https://threejs.org/docs/#manual/en/buildTools/Testing-with-NPM

*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//three.js can be loaded in as a module if need be, it is in our package.json
//right now it is servered statically through the public folder
//var THREE = require('three');

//good for 500,404 errors. displays renderer inside main.handlebars (white border)
var handlebars = require('express-handlebars').create({
    defaultLayout:'main'
    }
);

app.engine('handlebars', handlebars.engine);
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));
app.set('port', process.argv[2]);

app.use('/', function(req,res){
    res.render('home');
});

app.use(function(req, res){
    res.status(404);
    res.render('404');
});

app.use(function(req, res){
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Server started on http://localhost:' + app.get('port'));
});

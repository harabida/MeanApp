var express         = require('express');
    stylus          = require('stylus');
    morgan          = require('morgan');
    bodyParser      = require('body-parser');
    mongoose        = require('mongoose');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

function compile(str, path){
    return stylus(str).set('filename', path);
}

var app = express();


app.set('views', __dirname + '/server/views');
app.set('view engine','jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(stylus.middleware({
    src : __dirname + '/public',
    compile : compile
}));
app.use(express.static(__dirname + '/public'));

if (env === 'development') {
    mongoose.connect('mongodb://localhost/partials');
} else {
    mongoose.connect('mongodb://mehdi:partials@ds013891.mlab.com:13891/partials');
}

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error ...'));
db.once('open', function callback(){
    console.log('partials database opened');
});


var messageSchema = mongoose.Schema({message : String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
    mongoMessage = messageDoc.message;
});

app.get('/partials/:partialPath', function(req, res){
    res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res){
    res.render('index',{mongoMessage : mongoMessage});
});

var port = process.env.PORT || 5050;
app.listen(port);

console.log("application started on port : " + port);
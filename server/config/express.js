var express         = require('express'),
    stylus          = require('stylus'),
    morgan          = require('morgan'),
    bodyParser      = require('body-parser'),
    passport        = require('passport'),
    cookieParser    = require('cookie-parser'),
    session         = require('express-session');
module.exports = function(app,config){

    function compile(str, path){
        return stylus(str).set('filename', path);
    }
    app.set('views',config.rootPath+ '/server/views');
    app.set('view engine','jade');
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    //app.use(session({secret:'pharmacy'}));
    app.use(session({ secret: 'pharmacy', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }))

    app.use(passport.initialize());
    app.use(passport.session());


    app.use(stylus.middleware({
        src : config.rootPath + '/public',
        compile : compile
    }));
    app.use(express.static(config.rootPath + '/public'));

}
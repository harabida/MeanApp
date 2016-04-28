var passport = require('passport');

module.exports = function(app){


    app.get('/partials/*', function(req, res){
    //A revoir
    res.render('../../public/app/' + req.params[0]);
});

   app.post('/login', function(req, res, next){
       var auth = passport.authenticate('local', function(err, user){
           console.log('authenticate --> user : ' + user);
           if(err){return next(err);}
           if(!user){res.send({success:false});}
           req.logIn(user, function(err){
               if(err){return next(err);}
               res.send({success:true, user:user});
           } );
       });
       console.log('login --> req : ' + req);
       console.log('login --> res : ' + res);
       console.log('login --> next : ' + next);
       console.dir((req));
       auth(req,res,next);
   });



app.get('*', function(req, res){
    res.render('index');
});
}
var mongoose        = require('mongoose');


module.exports = function(config){

    mongoose.connect(config.db);


    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error ...'));
    db.once('open', function callback(){
        console.log('partials database opened');
    });


    var userSchema = mongoose.Schema({
        nom : String,
        prenom : String,
        userName : String
    });

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection){
       if (collection.length === 0){
           console.log('chargement de 1 user');
           User.create({nom : 'Harabida',
               prenom : 'Mehdi',
               userName : 'hmehdi'});
       }
    });

}
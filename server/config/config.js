var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development : {
        rootPath : rootPath,
        db : 'mongodb://localhost/partials',
        port : process.env.PORT || 5050

    },
    production : {
        rootPath : rootPath,
        db : 'mongodb://mehdi:partials@ds013891.mlab.com:13891/partials',
        port : process.env.PORT || 80
    }

}
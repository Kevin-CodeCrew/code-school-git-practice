
// Hold methods for fetching cfg values

const configValues = require('./config.json');

module.exports = {

    getDbConnectionString: function() {

       return 'mongodb://'+ configValues.uname + ':' + configValues.pwd + '@ds151402.mlab.com:51402/nodetodo2';

    }


};

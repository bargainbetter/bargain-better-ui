var profileController = require('./controllers/profileController');
var authController = require('./controllers/authController');

module.exports = function (app) {

    app.get('/', function(req, res) {
        res.redirect('/oauth/linkedin');
    });

    app.get('/profile', profileController.me);
    app.get('/oauth/linkedin', authController.authorize);
    app.get('/oauth/linkedin/callback', authController.authorizationCallback);
};


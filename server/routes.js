var viewController = require('./controllers/viewController');
var loginController = require('./controllers/loginController');

module.exports = function (app) {
    app.get('/', viewController.index);
    app.get('/register', viewController.register);
    app.post('/api/login', loginController.login);
}
var viewController = require('./controllers/viewController');
var loginController = require('./controllers/loginController');

module.exports = function (app) {
    app.get('/', viewController.index);
    app.get('/learn', viewController.learn);
    app.post('/api/login', loginController.login);
}
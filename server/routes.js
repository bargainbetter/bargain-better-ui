var viewController = require('./controllers/viewController');
var loginController = require('./controllers/loginController');

module.exports = function (app) {
    app.get('/', viewController.index);
    app.post('/api/login', loginController.login);
}
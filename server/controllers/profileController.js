var linkedInService = require('../services/linkedInService');

module.exports.index = function me(req, res) {
    linkedInService.getProfile(req.query.t)
        .then((result) => {
            console.log(result); // or do something else
            res.json(result) // actually return a template saying you're registered
        });
};


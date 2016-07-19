var linkedInService = require('../services/linkedInService');

module.exports.me = function me(req, res) {
    linkedInService.getProfile(req.query.t)
        .then((result) => {
            console.log(result);
            res.json(result)
        });
};


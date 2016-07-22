var linkedInService = require('../services/linkedInService');

module.exports.index = function me(req, res) {
    linkedInService.getProfile(req.query.t)
        .then((result) => {
            console.log(result); // or do something else

            // profileService.register(result.user)
            //   .then(res.render(thanks));

            res.json(result); // actually return a template saying you're registered
        });
};


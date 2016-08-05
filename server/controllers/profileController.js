var linkedInService = require('../services/linkedInService');
var mailService = require('../services/mailService');

var request = require('request');

module.exports.index = function index(req, res) {
    res.render('profile', { token: req.query.t });
};

module.exports.register = function register(req, res) {
    linkedInService.getProfile(req.params.token)
        .then(basicProfile => {

            // create the subscriber object
            subscriber = {
                "email_address": basicProfile.emailAddress,
                "status": "subscribed",
                "merge_fields": {
                    "FNAME": basicProfile.firstName,
                    "LNAME": basicProfile.lastName
                }
            };

            // right now we don't care about the response, just check if there is an error.
            return mailService.subscribe(subscriber)
                .then(subscriptionResponse => {
                    log.info(subscriptionResponse);
                    return subscriptionResponse;
                })
                .catch(err => {
                    log.error(err);
                });
        })
        .then(subscriptionResponse => res.render("profile-li", subscriptionResponse));
}


var staticProfile = { emailAddress: 'chris.j.stevenson@gmail.com',
    firstName: 'Christopher',
    formattedName: 'Christopher Stevenson',
    headline: 'Sr. Manager, IT at Best Buy',
    id: 'RxVp_B8apR',
    industry: 'Information Technology and Services',
    lastName: 'Stevenson',
    location:
    { country: { code: 'us' },
        name: 'Greater Minneapolis-St. Paul Area' },
    numConnections: 269,
    numConnectionsCapped: false,
    pictureUrl: 'https://media.licdn.com/mpr/mprx/0_GH1iiRkWsDUoEFFQeHbCw2SexjFwEBJw8oIS6mIeVyNoEboFX2dDCy6epfF92vBbeMbDeEdH9IVEuPIISU90IfkXPIVIuPmFHU9hhaldZofbQ5vUko8m8sx41YhRLPJ9T4tfbyHRTOv',
    pictureUrls:
    { _total: 1,
        values: [ 'https://media.licdn.com/mpr/mprx/0_0liagGbvEUQIr2emDqODuRvKZqEarh6HM1OdWp61dNFmr2wwD80dRtQnJJEC6CFSmZOuIeF1Ea6I_AIHsVtTEJbzja6w_AsHDVt20GUveqBC_QITDYCDvcRy-m' ] },
    positions: { _total: 1, values: [ [Object] ] },
    publicProfileUrl: 'https://www.linkedin.com/in/christopher-stevenson-663a4330' };


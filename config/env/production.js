var config = module.exports;

config.environment = 'production';

config.express = {
    hostName: 'localhost',
    port: 9002,
    ip: '127.0.0.1'
};

config.callBackUrl = 'http://bargainbetter.com/oauth/linkedin/callback';
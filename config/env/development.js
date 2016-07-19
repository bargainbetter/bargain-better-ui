var config = module.exports;

config.express = {
    hostName: 'localhost',
    port: 9002,
    ip: '127.0.0.1'
}

config.ldap = {
    server: 'ldaps://globalovd.na.bestbuy.com:636', //Prod
    searchBase: 'ou=People,dc=bestbuy,dc=com',
    //bindCredentials: 'SJYMkK7qfjvH8QxA',   //QA
    //bindCredentials: 'Hokies02',
    bindDN: 'uid=MINOSAdmin,ou=Applications,dc=bestbuy,dc=com',
    bindCredentials: '8C3G@H?46Gxe_jbd',   //Prod

    //bindDN: 'uid=A1021420,ou=People,dc=bestbuy,dc=com',
    //username: 'A1021420',
    //password:

    //attributes: 'mail',
    //attrsOnly: true,
    filter: '(uid=A1021420)',
    scope: 'sub'
}
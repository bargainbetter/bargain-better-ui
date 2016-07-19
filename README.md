#nodejs-ldap 
- - - 
Look at config/env/development for ODSEE(LDAP) connection settings.  Demo uses ldapjs to create a client and bind to ODSEE.  Anonymous binds are not allowed, but you can bind using any NA credentials.  The demo returns what user information is available for your user id.  

#Getting Started
- - - 
    npm install
    node app
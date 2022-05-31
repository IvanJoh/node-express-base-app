// LOAD ENVIRONMENT VARIABLES
require("dotenv").config();

// INITIALIZE APP OBJECT
var app = {
    interfaces: {},
    config: {
        main: require("./config/config")
    }
}

const _START = async () => {
    
    // EXPRESS INTERFACE
    await require('./http/express')(app);

}


_START();








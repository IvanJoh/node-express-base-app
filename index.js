// LOAD ENVIRONMENT VARIABLES
require("dotenv").config();

// GLOBAL VARIABLES
global.__basedir = __dirname;

// INITIALIZE APP OBJECT
var app = {
  loggers: {},
  interfaces: {},
  config: {
    main: require("./config/config"),
  },
};

const _START = async () => {

  // LOGGING
  await require('./logging')(app);
  app.loggers.main.info("Loggers attached successfully...");

  // EXPRESS INTERFACE
  await require("./interfaces/http/express")(app);
};

_START();

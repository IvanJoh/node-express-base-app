// INITIALIZE CONFIG OBJECT
let config = {};

// INTERFACES
config.interfaces = {};

// EXPRESS
config.interfaces.express = {};
config.interfaces.express.port = process.env.EXPRESS_PORT || 3000;

module.exports = config;

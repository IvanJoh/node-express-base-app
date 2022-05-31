// INITIALIZE CONFIG OBJECT
let config = {};


// LOGGING
config.logging = {};
config.logging.disable_logging = false;
config.logging.loggers = [
  // {
  //   name: 'test1',
  //   hideFromConsole: false,
  //   files: [
  //     { fileName: "test1_all" },
  //     { fileName: "test1_error", level: "error" }
  //   ]
  // },
  // {
  //   name: 'test2',
  //   hideFromConsole: true,
  //   files: [
  //     { fileName: "test2_all" },
  //     { fileName: "test1_all" }
  //   ]
  // }
]


// INTERFACES
config.interfaces = {};

// EXPRESS
config.interfaces.express = {};
config.interfaces.express.port = process.env.EXPRESS_PORT || 3000;

module.exports = config;

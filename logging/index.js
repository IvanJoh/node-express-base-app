// BASE LOGGER
const BASE_LOGGER = {
  name: 'main',
  hideFromConsole: false
}

module.exports = async app => {

  // GET CONFIG FROM APP
  const config = app.config.main;

  // LOGGERS CONFIG
  let loggersConfig = config.logging.loggers || [];

  // ADD BASE LOGGER TO CONFIG
  loggersConfig = [BASE_LOGGER].concat(loggersConfig);

  // CREATE LOGGERS
  loggersConfig.forEach(l => {

    // DESTRUCTURE CONFIG
    let { name } = l;

    // CREATE LOGGER
    app.loggers[name] = require('./logger')(l);

  });

  return app

}

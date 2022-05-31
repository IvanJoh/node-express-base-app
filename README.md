# node-express-base-app
Base boilerplate code for starting up any Node-Express project. Feel free to clone the repo and use in your own projects.
## Config
Most of the config is found inside `config/config.js` with some of the variables passed as environment variables
## Features
All the features of this base application will be listed here and how to use them
### Routers
Configure multiple routers using the example found in `interfaces/http/routers/test.js`
### Loggers
You can easily configure loggers that write to the console or to files inside the the `logs` folder
To setup a logger, change the `config/config.js` file under `config.logging.loggers`
```
config.logging.loggers = [
    ...
    {
        name: 'debug_api_logger',
        hideFromConsole: true,
        files: [
            ...
            {
                filename: 'debugApiLogger'
            },
            {
                filename: 'debugApiLoggerErrors',
                level: 'error'
            }
            ...
        ]
    }
    ...
]
```
Define a logger with the properties below:
 - `name` (required) is how you use the logger in your code (i.e. `app.loggers.debug_api_logger.info("Hi there")`)
 - `hideFromConsole` (optional) set this to `false` if you want to only log to a file and not see in console
 - `files` Specificy all the files you want to log to with a `filename` (including the extension) and a [logging](https://github.com/winstonjs/winston#logging-levels) `level`


*Thank you for reading*

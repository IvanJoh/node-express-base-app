module.exports = async app => {

  // CONFIG
  let config = app.config.main;
  let PORT = config.interfaces.express.port;

  // EXPRESS
  const _express = require("express")();

  // MIDDLEWARE
  _express.use((req, res, next) => {
    console.log("Main Express Middleware");
    next();
  });

  // ROUTERS
  const routers = require("./routers");

  const testRouter = await routers.test(app);
  _express.use("/test", testRouter);

  // SERVER INSTANCE
  app.interfaces.http = _express.listen(
    PORT,
    () => console.log(`Express server now listening on port : ${PORT}`)
  );

  return app
}

module.exports = async app => {

  // ROUTER INSTANCE
  const router = require("express").Router();

  // MIDDLEWARE
  router.use((req, res, next) => {
    app.loggers.main.info("Test router triggered...");
    next();
  });

  // GET
  router.get("/", (req, res) => {
    res.status(200).send({
      hello: "World!!!",
      foo: {
        bar: "baz"
      }
    })
  });

  // POST

  return router;
}

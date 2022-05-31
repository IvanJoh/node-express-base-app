module.exports = async app => {

  // ROUTER INSTANCE
  const router = require("express").Router();

  // MIDDLEWARE
  router.use((req, res, next) => {
    console.log("Test router fired off");
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

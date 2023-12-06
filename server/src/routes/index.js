const routes = module.exports;

routes.health = require("./healthRoutes");
routes.auth = require("./authRoutes");
routes.user = require("./userRoutes");
routes.post = require("./postRoutes");

const express = require("express");
const cors = require("cors");
const { db, loadEnv } = require("./src/utils");
const { warn, log } = require("logggger");
const constants = require("./constants");
const { errorHandler } = require("./src/middlewares/errorMiddlewares");
const { auth, user, post, health } = require("./src/routes");

const startServer = () => {
  const currentEnv = loadEnv();
  const port = process.env.PORT || 5000;
  const hostname = process.env.HOSTNAME || "127.0.0.1";
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/uploads", express.static(constants.paths.uploadDir));

  app.use("/api/health", health);
  app.use("/api/auth", auth);
  app.use("/api/users", user);
  app.use("/api/posts", post);

  app.use(errorHandler);

  app.listen(port, hostname, async () => {
    warn(`Current environment: ${currentEnv}`);
    await db();
    log(`Server running at http://${hostname}:${port}`);
    log(`Check server health at http://${hostname}:${port}/api/health`);
  });
};

startServer();

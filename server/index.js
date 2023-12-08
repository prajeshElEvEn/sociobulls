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
  const app = express();

  const allowedOrigins = process.env.ALLOWED_HOSTS?.split(", ") || [
    `http://127.0.0.1:${port}`,
  ];

  const options = {
    origin: allowedOrigins,
  };

  app.use(cors(options));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/uploads", express.static(constants.paths.uploadDir));

  app.use("/api/health", health);
  app.use("/api/auth", auth);
  app.use("/api/users", user);
  app.use("/api/posts", post);

  app.use(errorHandler);

  app.listen(port, async () => {
    warn(`Current environment: ${currentEnv}`);
    await db();
    log(`Server is up and running`);
  });
};

startServer();

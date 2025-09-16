require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");

const { notFoundHandler, errorHandler } = require("./middleware/errorHandler");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use(notFoundHandler);
app.use(errorHandler);

const bootstrap = async () => {
  await sequelize.authenticate();

  await sequelize.sync();

  app.listen(process.env.PORT, () =>
    console.log("App Running on port", process.env.PORT)
  );
};

bootstrap();

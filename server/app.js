const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./json/swagger1.json");

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/swagger/v1/swagger.json", (req, res) => {
  res.json(swaggerDocs);
});

app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, {
    explorer: true,
    swaggerOptions: {
      docExpansion: "none",
      urls: [
        {
          url: "/swagger/v1/swagger.json",
          name: "v1",
        },
      ],
    },
  })
);

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`TixPro is listening on port ${port}`);
});

require("dotenv").config();
const app = require("express")();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable("x-powered-by");

app.use("/", apiRouter());
const server = app.listen(4000, () =>
  console.log(`Listening on http://localhost:${server.address().port}`)
);
module.exports = {
  server
}
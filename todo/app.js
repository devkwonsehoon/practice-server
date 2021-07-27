const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi!");
});
app.use("/api", bodyParser.json(), router);
app.use(express.static("./assets"));

app.listen(3000, () => {
  console.log("서버가 켜졌어요!");
});

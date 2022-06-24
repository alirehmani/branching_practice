const express = require("express");
const cors = require("cors");

const app = express();

const port = 3500;

app.use(cors());

app.listen(port, () => {
  console.log(`App is listening on port and we are testing things ${port}`);
});

const express = require("express");
require("./config/db");
const app = express();
const UserRouter = require("./api/user");
app.use(express.json());
app.use("/user", UserRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`Running at ${port}........`);
});

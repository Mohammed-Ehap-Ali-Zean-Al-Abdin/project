const mongoose = require("mongoose");
const URL =
  "mongodb://Mohamed_Yousri:ki7fmgAtIWFs7WIe@ac-3ox82vh-shard-00-00.pnk2r7f.mongodb.net:27017,ac-3ox82vh-shard-00-01.pnk2r7f.mongodb.net:27017,ac-3ox82vh-shard-00-02.pnk2r7f.mongodb.net:27017/Users?ssl=true&replicaSet=atlas-5lsggd-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true, // Add this option
  })
  .then(console.log("db connected...."))
  .catch((err) => {
    console.log(err);
  });

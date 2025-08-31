const express = require("express");
const colors = require("colors");
const app = express();
const cors =require("cors");
const morgan =require("morgan");
const dotenv =require("dotenv");
const connectDb = require("./config/db");

dotenv.config();
connectDb();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));



app.use("/api/v1/test", require("./routes/testRoute"));
app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/user", require("./routes/userRoute"));
app.use("/api/v1/resturant", require("./routes/resturantRoute"));

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Welcome to Food Server APP API BASE PROJECT </h1>");
});

 const PORT =process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.white.bgMagenta);
});


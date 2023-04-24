const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const AuthRouter = require("./routes/Auth.routes.js");
const PostRouter = require('./routes/Post.routes.js')
const cors = require("cors");
const path = require("path");
env.config();
const app = express();
const cookiePerser = require("cookie-parser");
app.use(express.json());
app.use(cors());
app.use(cookiePerser());
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
mongoose.connect(process.env.DB_URL);

app.use("/auth", AuthRouter);
app.use("/post", PostRouter);

app.listen(process.env.PORT, () =>
  console.log(`Conneted To db and run in http://localhost:${process.env.PORT}`)
);

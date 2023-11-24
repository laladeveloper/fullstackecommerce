const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require('cors');

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/.env" });
}

app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true,limit: '50mb' }));
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
}));


// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");
const check = require("./routes/check");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
// app.use("/", check);

// for production mode from the server side 
// app.use(express.static(path.join(__dirname, "./buildd")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./buildd/index.html"));
// });

app.use(express.static(path.join(__dirname, "../client2/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client2/build/index.html"));
});


// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;

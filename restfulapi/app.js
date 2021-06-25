var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
//index-router
var indexRouter = require("./routes/index");
//users-router
var usersRouter = require("./routes/api/users");
//matches-router
var matchesRouter = require("./routes/api/matches");

var config = require("config");
var cors = require("cors");
var app = express();
app.use(cors());


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);
//API-Users
app.use("/api/users", usersRouter);
//API-Matches
app.use("/api/matches", matchesRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


//MONGOOSE CONNECTION
mongoose
  .connect(config.get("psldb"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongo-DB (PSL)...."))
  .catch((error) => console.log(error.message));
module.exports = app;

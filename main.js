// http  module -web server
// express framework -web server
const express = require("express");
const expressSession = require("express-session");
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dawadb",
});
const bcrypt = require("bcrypt");
const saltRounds = 8;
const app = express(); // creating an server app
// middleware
// app.use(function (req,res,next){
//     console.log("this is a middleware function!");
//     next()
// })
app.use(express.urlencoded({ extended: false })); // req.body
app.use(
  expressSession({
    secret: "secret word",
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  if (req.session.user) {
    res.locals.user = req.session.user;
  } else {
    res.locals.user = null;
  }
  next();
});

//define routes/endpoints
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/signup", (req, res) => {
  if (req.session.user) {
    res.redirect("/");
  } else {
    res.render("signup.ejs");
  }
});
app.post("/signup", (req, res) => {
  // save data to db
  // encrypt the password before storage
  // check if email already exists
  conn.query(
    "SELECT email FROM  users WHERE email = ?",
    [req.body.email],
    (selectErr, data) => {
      if (data.length > 0) {
        res.render("signup.ejs", { emailError: "Email already exists" });
      } else {
        if (req.body.confirmPassword == req.body.password) {
          const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
          conn.query(
            "INSERT INTO users(name,email,password,yob,phone) VALUES(?,?,?,?,?)",
            [
              req.body.fullname,
              req.body.email,
              hashedPassword,
              req.body.yob,
              req.body.phone,
            ],
            (err) => {
              if (err) {
                console.log("sql err enocuntered" + err);
              } else {
                res.redirect("/login");
              }
            }
          );
        } else {
          res.render("signup.ejs", {
            passwordError: "Password and confirm password do not match",
          });
        }
      }
    }
  );
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {
  console.log("jhfjhdjfhdj");
  // req.body.password and req.body.email
  // check if the email is registerd(if in db)
  // does the password provide match with what is the db -- bcrypt
  conn.query(
    "SELECT * FROM  users WHERE email = ?",
    [req.body.email],
    (selectErr, data) => {
      if (data.length > 0) {
        // the person is registerd--proceed to check password
        let isPasswordCorrect = bcrypt.compareSync(
          req.body.password,
          data[0].password
        ); // true or false
        if (isPasswordCorrect) {
          // create a session -- identity for a person logged in stored by the server -- by creating a sessionid cookie
          // sessions and cookies
          req.session.user = data[0];
          console.log(req.sessionID);
          res.redirect("/");
        } else {
          res.render("login.ejs", {
            loginError: "Email or Password incorrect",
          });
        }
      } else {
        res.render("login.ejs", { loginError: "Email or Password incorrect" });
      }
    }
  );
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.get("/drugs", (req, res) => {
  if (req.query.search) {
    conn.query(
      "SELECT * FROM drugs WHERE name = ? OR description=?",
      [req.query.search, req.query.search],
      (err, drugs) => {
        // check db error
        res.render("drugs.ejs", { drugs: drugs, searchterm: req.query.search });
      }
    );
  } else {
    conn.query("SELECT * FROM drugs", (err, drugs) => {
      // check db error
      res.render("drugs.ejs", { drugs: drugs });
    });
  }
});

//starting app
app.listen(3000);
//   http://192.168.100.106:3000

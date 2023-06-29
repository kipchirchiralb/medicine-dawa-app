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
const multer = require("multer")
const upload = multer({dest: "public/images"})

const app = express(); // creating an server app
// middleware
// app.use(function (req,res,next){
//     console.log("this is a middleware function!");
//     next()
// })
app.use(express.urlencoded({ extended: false })); // req.body
app.use(express.static("public"))
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
  if(req.session.user && req.session.user.email === "admin@madawa.com"){
    conn.query("SELECT * FROM drugs ORDER BY drug_id DESC", (err, drugs)=>{
      // check for server error
      res.render("admin.ejs", {drugs: drugs})
    })    
  }else{
      conn.query(
        "SELECT * FROM reviews JOIN users ON reviews.user_id = users.email ORDER BY review_id DESC",
        (err, reviews) => {
          if (err) {
            res.render(err);
          } else {
            res.render("index.ejs", { reviews: reviews });
          }
        }
      );
  }
});


app.post("/newdrug", upload.single("brown"), (req,res)=>{
  conn.query("INSERT INTO drugs (name,description,price,package,count,imagelink) VALUES(?,?,?,?,?,?)", [req.body.name, req.body.desc,req.body.price,req.body.package,req.body.count, req.file.filename], (err)=>{
    //check server error
    res.redirect("/")
  })  
})


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
      `SELECT * FROM drugs WHERE name LIKE '%${req.query.search}%' OR description LIKE '%${req.query.search}%'`,
      (err, drugs) => {
        // check db error
        console.log(drugs);
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

app.get("/review", (req, res) => {
  if (req.session.user) {
    res.render("review.ejs");
  } else {
    res.redirect("/login");
  }
});
app.post("/review", (req, res) => {
  if (req.session.user) {
    conn.query(
      "INSERT INTO reviews(user_id, message) VALUES(?,?)",
      [req.session.user.email, req.body.message],
      (err) => {
        // check for server error
        res.render("review.ejs", { successMessage: "Review recieved" });
      }
    );
  } else {
    res.redirect("/login");
  }
});

//starting app
app.listen(3000);
//   http://192.168.100.106:3000

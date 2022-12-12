const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE"],
  })
);
// DB connection
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "regestration",
});
const a = (err) => {
  if (!err) console.log("DB connection succeeded.");
  else
    console.log(
      "DB connection is failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
};
mysqlConnection.connect(a);

//1) CREATE Voter
function createUser(req, res) {
  console.log(req.body, "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDddddd");
  const data = req.body;
  console.log(data);
  mysqlConnection.query(
    `INSERT INTO user_data (name,fatherName,cnic,dob,contact,address,city,province,district,uc,ward,gender,email) VALUES ("${data.name}","${data.fatherName}","${data.cnic}","${data.dob}","${data.contact}","${data.address}","${data.city}","${data.province}","${data.district}","${data.uc}","${data.ward}","${data.gender}","${data.email}")`,
    (err, rows, fields) => {
      if (!err) {
        console.log("succeed");
        res.send(rows);
      } else console.log(err, "errerrrrrrrrrr");
    }
  );
}
app.post("/create/new_user", createUser);

// Get All Data
app.get("/user/data", (req, res) => {
  mysqlConnection.query("SELECT * FROM user_data", (err, rows) => {
    if (!err) {
      console.log("Success");
      res.send(rows);
    } else console.log(err);
  });
});

// Get province
app.get("/pro/:data", (req, res) => {
  console.log(req.params);
  mysqlConnection.query(
    `SELECT * FROM user_data WHERE province = "${req.params.data}"`,
    (err, rows) => {
      if (!err) {
        console.log("Success");
        res.send(rows);
      } else console.log(err);
    }
  );
});

// Get city
app.get("/city/:data", (req, res) => {
  console.log(req.params);
  mysqlConnection.query(
    `SELECT * FROM user_data WHERE city = "${req.params.data}"`,
    (err, rows) => {
      if (!err) {
        console.log("Success");
        res.send(rows);
      } else console.log(err);
    }
  );
});

// Get district
app.get("/district/:data", (req, res) => {
  console.log(req.params);
  mysqlConnection.query(
    `SELECT * FROM user_data WHERE district = "${req.params.data}"`,
    (err, rows) => {
      if (!err) {
        console.log("Success");
        res.send(rows);
      } else console.log(err);
    }
  );
});

// Get ward
app.get("/ward/:data", (req, res) => {
  console.log(req.params);
  mysqlConnection.query(
    `SELECT * FROM user_data WHERE ward = "${req.params.data}"`,
    (err, rows) => {
      if (!err) {
        console.log("Success");
        res.send(rows);
      } else console.log(err);
    }
  );
});

// Get Union council
app.get("/uc/:data", (req, res) => {
  console.log(req.params);
  mysqlConnection.query(
    `SELECT * FROM user_data WHERE uc = "${req.params.data}"`,
    (err, rows) => {
      if (!err) {
        console.log("Success");
        res.send(rows);
      } else console.log(err);
    }
  );
});

// Get gender
app.get("/gender/:data", (req, res) => {
  console.log(req.params);
  mysqlConnection.query(
    `SELECT * FROM user_data WHERE gender = "${req.params.data}"`,
    (err, rows) => {
      if (!err) {
        console.log("Success");
        res.send(rows);
      } else console.log(err);
    }
  );
});

app.listen(4000, () => {
  console.log("Server is up on port 4000");
});

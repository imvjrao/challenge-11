const express = require("express");
const inquirer = require("inquirer");
const notes = require("./Develop/db/db.json");
const fs = require("fs");
const path = require("path");


const app = express ();
app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const port = process.env.PORT || 3001


const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

const port = process.env.PORT || 3001


const PORT = process.env.PORT || 3001
const express = require("express");
const inquirer = require("inquirer");
const notes = require("./Develop/db/db.json");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");


const app = express ();
app.use(express.static(path.join(__dirname, "./Develop/public")));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"))
});

app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/db/db.json"))
});

app.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./Develop/db/db.json"));
    const newNotes = req.body;
    newNotes.id = uuid.v1();
    notes.push(newNotes);
    fs.writeFileSync("./Develop/db/db.json", JSON.stringify(notes));
    res.json(notes);
});

app.delete("api/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./Develop/db/db.json"));
    const deleteNote = notes.filter((rmvNote) => (rmvNote.id) !== (req.params.id));
    fs.writeFileSync("./Develop/db/db.json", JSON.stringify(deleteNote));
    res.json(deleteNote);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"))
});

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});










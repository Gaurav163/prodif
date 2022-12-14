require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var sympt = require("./symptoms.json");

app.get("/", async (req, res) => {
    try {
        res.render("symptoms", { symptoms: sympt, path1: process.env.path, token1: process.env.token });
    } catch (error) {

    }
})

app.get("/tests", async (req, res) => {
    try {
        res.render("test");
    } catch (error) {

    }
})

app.get("/testresults", async (req, res) => {
    try {
        res.render("testresult");
    } catch (error) {

    }
})







app.listen(process.env.PORT || 3000, () => console.log('Server started on 3000!'));
const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get("/", (request, response) => {
    response.json({
        info: 'Hello world!'
    });
})

const db = require('./queries');

// listen for requests
app.listen(port, () => {
    console.log("Server is running on " + port);
});

app.get("/", (request, response) => {
    response.json({
        info: 'Hello world!'
    });
})
app.get("/students", db.getStudents);
app.get("/students/:id", db.getStudentById);
app.put("/students/:id", db.updateStudent);
app.post("/students", db.createStudent);
app.delete("/students/:id", db.deleteStudent);
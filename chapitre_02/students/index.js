var express = require("express");
var app = express();
app.listen(8000, function() {
    console.log("Server started");
});
app.use(express.json());

const students = [
    "studentA",
    "studentB",
    "studentC",
    "studentD"
]

app.get("/students", function(req, res) {
    //res.json(students);
});

app.post("/students", function(req, res) {
    const student = req.body.students;
    console.log(student);
    students.push(student)
    res.json({ message: 'Student added: ' + student })
    console.table(students);
});


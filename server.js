const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Student Management System Backend is Running!");
});

app.get("/students", (req, res) => {

    res.json({
        message: "Students API is working",
        students: []
    });

});

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});

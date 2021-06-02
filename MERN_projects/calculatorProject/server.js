const express = require('express');
const bodyParser = require('body-parser');
const { request } = require('http');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log('The Server has started');
});


app.get("/bmi", function (req, res) {
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", function (req, res) {
    var height = Number(req.body.height);
    var weight = Number(req.body.mass);
    var BMI = weight / (height * height);

    res.send("<h1>The BMI is : " + BMI + "</h1>");
});

app.get("/addition", function (request, response) {

    // response.send('Calculator app');
    response.sendFile(__dirname + "/addition.html");
});

app.post("/addition", function (request, response) {
    var number1 = Number(request.body.num1)
    var number2 = Number(request.body.num2)
    var result = number1 + number2;

    response.send("<h1>The addition of both the number is : " + result + "</h1>");
});

app.get("/subtraction", function (request, response) {

    
    response.sendFile(__dirname + "/subtraction.html");
});

app.post("/subtraction", function (request, response) {
    var num1 = Number(request.body.nums1)
    var num2 = Number(request.body.nums2)
    var result2 = num1 - num2;

    response.send("<h1>The subtraction of both the number is : " + result2 + "</h1>");
});
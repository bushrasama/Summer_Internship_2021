const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const ejs = require('ejs');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/posts", {
    useNewUrlParser: true,
    useUnifiedTopology : true
});

app.listen(3000, function () {
    console.log("THE SERVER IS UP AND RUNNING at port 3000 ");

});

const schema = {
    title: String,
    description: String
};

const Article = mongoose.model("article", schema);
app.get("/article", function (req, res) {
    Article.find(function (err, articles) {
        if (articles) {
            console.log(articles);
            const allvalues = JSON.stringify(articles);
            res.send(allvalues);
        } else {
            res.send("There are no articles");
            console.log(err);
        }
    });

    // adding new data using postman - post method
    app.post("/article", function (req, res) {
        const some = new Article({
            title: String(req.body.title),
            description: String(req.body.description)
        });
        some.save();
    console.log(req.body.title);
    console.log(req.body.description);
    
    });

    //delete all articles
    app.delete("/article", function (req, res) {
        Article.deleteMany(function (err) {
            if (!err) {
                console.log("All the articles have been deleted");
            }
        });
    });

    //get one value of article
    app.get("/article/:articleTitle", function (req, res) {
        Article.findOne({ title: req.params.articleTitle }, function (err, onearticle) {
            if (!err) {
                console.log(onearticle);
                const onegetarticle = JSON.stringify(onearticle);
                res.send(onegetarticle);
            }
            else {
                console.log(err);
            }
           
        });
    });

    //delete one value of article
    app.delete("/article/:articleTitle", function (req, res) {
        Article.deleteOne({ title: req.params.articleTitle }, function (err) {
            if (!err) {
                console.log("The article was deleted");
            }
        });
    });

});
let express=require('express');

let app=express();

app.get("/",function(req,res){
    res.send("Hello to my first Express App!!!");
});
app.get("/wiki/:keyword/fit12095/:id",function(req,res){
    console.log(req.url);
    console.log(req.params);
    
    res.send("Hello to my first Express App!!!");
});

app.get("/report",function (req,res) {
    console.log(req.url);
    console.log(req.query);

    console.log("the name is==="+req.query.name);
    console.log("the age is==="+req.query.age);
    
    
    res.send("This is the report page!!!");
});
app.get("/about",function (req,res) {
    res.send("This is the about page!!!");
});
app.get("/contactus",function (req,res) {
    res.send("This is the about page!!!");
});
app.get("/login",function (req,res) {
    res.send("This is the login  page!!!");
});

app.listen(8080);





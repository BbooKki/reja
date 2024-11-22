console.log("Web Serverni boshlash");
const express = require("express");
const app = express(); //instance yasash uchun kerak bo'ladi app
const res = require("express/lib/response");
const fs = require("fs");




//MongoDB chaqirish
const db = client.db();



//Front
// Design Pattern lar 2 xil bo'ladi Architectual va Design Patternlar
//1 **KIRISH** expressga kirib kelgan codelar yoziladi
app.use(express.static("public"));    //har qanday browserdan kirib kelyotgan zaproslar uchun public folder ochiq degan manoni beradi
//MiddleWare DP

app.use(express.json())               //kirib kelyotgan json formatdagi datani obj holatga o'girib beradi
//MiddleWare DP => REST api uchun xizmat qiladi
// REST API

app.use(express.urlencoded({extended: true}));        //html dan traditional request (form request) dan express serverimiz qabul qivolamiza. Malasan HTML form post shaklida kevotgan requestlar
// TRADITIONAL API

//MiddleWare DP


let user;
fs.readFile("database/user.json", "utf-8", (err, data)=>{
    if(err){
        console.log("ERROR", err)
    } else {
        user = JSON.parse(data);
    }
});

//2 **Session CODE**

//3 **VIEWS CODE** Backenda front end yasaymiz (VIEW yasaymiz)
//EJS backend'da front end'mizni qurub beryabdi
app.set("views", "views");
app.set("view engine", "ejs"); //view engine ejs ligini ko'rsatib beryabmiz


//4 **Router'larga** mo'ljallangan
//app request 3 qismdan iborat: 1) URL qismi (start line), HTTP request header, Request Body
app.post("/create-item", (req, res)=>{ //post o'zi bilan data olib kelib databasega yozadi
    console.log('user entered /create-item'); //kelgan requestni body'sini tekshiryabmiz
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data)=>{
        if(err){
            console.log(err);
            res.end("something went wrong");
        }else {
            res.end("successfully added");
        }
    }); //json shakilda ma'lumotni qaytarib yuboryabmiz
})

app.get('/author', (req, res) => {
    db.collection("plans").find().toArray()
    res.render("author", {user: user});
});



app.get("/", function(req, res){ //get database'dan ma'lumot o'qiydi
    console.log('user entered /');
    db.collection("plans").
    find().
    toArray((err, data) =>{
        if(err){
            console.log(err);
            res.end("something went wrong");
        } else {
            res.render("reja", {items: data});
        }
    })

    res.render("reja"); //ejs dagi harid.ejs fileni render qilyabmiza
});


module.exports = app;

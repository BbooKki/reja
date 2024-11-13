console.log("Web Serverni boshlash");
const express = require("express");
const app = express(); //instance yasash uchun kerak bo'ladi app

//1 **KIRISH** expressga kirib kelgan codelar yoziladi
app.use(express.static("public"));    //har qanday browserdan kirib kelyotgan zaproslar uchun public folder ochiq degan manoni beradi
app.use(express.json())               //kirib kelyotgan json formatdagi datani obj holatga o'girib beradi
app.use(express.urlencoded({extended: true}));        //html dan traditional request (form request) dan express serverimiz qabul qivolamiza. Malasan HTML form post shaklida kevotgan requestlar
const http = require("http");

//2 **Session CODE**

//3 **VIEWS CODE** Backenda front end yasaymiz (VIEW yasaymiz)
app.set("views", "views");
app.set("view engine", "ejs"); //view engine ejs ligini ko'rsatib beryabmiz


//4 **Router'larga** mo'ljallangan
app.get("/", function(req, res){
    res.end(`<h1 style="background: red" >HELLO WORLD</h1>`);
});

app.get("/hello", function(req, res){
    res.end(`<h1 style="background: orange" >HELLO MIT</h1>`);
});

app.get("/gift", function(req, res){
    res.end(`<h1 style="background: green" >GIFT PAGE</h1>`);
});

const server = http.createServer(app); //serverga appni yuklayabmiza
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port: ${PORT}`);
});

//express orqali web server qurib oldik.
//front end'ni qurish 2 usuli bor 1) Backend'da front qurib olish BSSR using EJS 2) React - single page rendering




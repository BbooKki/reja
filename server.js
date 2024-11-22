console.log("Web Serverni boshlash");
const express = require("express");
const app = express(); //instance yasash uchun kerak bo'ladi app

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
const http = require("http");
const fs = require("fs");

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
    console.log(req.body); //kelgan requestni body'sini tekshiryabmiz
    res.json({test: "success"});  //json shakilda ma'lumotni qaytarib yuboryabmiz
})

app.get('/author', (req, res) => {
    res.render("author", {user: user});
});



app.get("/", function(req, res){ //get database'dan ma'lumot o'qiydi
    res.render("reja"); //ejs dagi harid.ejs fileni render qilyabmiza
});




const server = http.createServer(app); //serverga appni yuklayabmiza
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});

//express orqali web server qurib oldik.
//front end'ni qurish 2 usuli bor 1) Backend'da front qurib olish BSSR using EJS 2) React - single page rendering

//git clean -df oxirgi ruchnoy kiritgan narsalarni udalit qiladi

//FRONTEND DEVELOPMENT: BSSR (EJS) & Single Page Rendering (REACT)

/* 
API REQUEST:
    TYPEs: =>        Traditional API | REST API | GraphQL API
    STRUCTURE: =>    Header | Body
    METHODs: =>      get | post
*/

// PATTERN (qolib): Architecture (BUTUN UCHASTKA UCHUN) & Design (SPECIFIC UCHASTKA UCHUN JAVOB BERADI)


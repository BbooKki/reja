console.log('Web Serverni boshlash');
const express = require("express"); 
const app = express(); 

//MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

// *****1 - Kirish codelari*******
app.use(express.static("public")); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

// ********2 - Sessionga bogliq bolgan codelar*******
// ********3 - Views ga bogliq codelar*********

app.set("views", "views");
app.set("view engine", "ejs"); 

// *****4 - Rooting ga bogliq codelar********
app.post("/create-item", (req, res) => { //REST API
    console.log(req.body);
    console.log('STEP2: Frontenddan Backendga kelish');
    // res.end("success");
    const new_reja = req.body.reja;
    console.log("new_reja: ", new_reja);
    console.log('STEP3: Backenddan Databasega Malumot yozishni talab qilish');
    db.collection("plans").insertOne({reja:new_reja}, (err, data) => {
        console.log('STEP4: Databaseda malumot yozildi va Backenda ishlatilishiga tayyor');
        console.log(data.ops);
        console.log('STEP5:  yozilgan malumotni Backenddan Frontendga jonatish JSON formatda');
        res.json(data.ops[0]);
    });
})

app.post("/delete-item", (req, res) =>{ //REST API
    console.log("STEP4: Frontenddan kelgan so'rovni qabul qilib oldik backendda");
    const id = req.body.id; //requestni body qismida kelgan elementni id'sini id'ga tenglashtirib oldik
    console.log("STEP5: Databasedagi malumotni ochirishni talab qilish");
    db.collection("plans").deleteOne({_id: mongodb.ObjectId(id)}, function(err, data){
        console.log("STEP6: Databasdagi malumot Backend orqali ochirildi va javob Frontendga jonatildi");
        res.json({state: "success"});
    })
});


app.post("/edit-item", (req, res)=>{ //REST API
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)}, {$set: {reja: data.new_input}}, function(err, data){
        res.json({state: "success"});
    });
});

app.post("/delete-all", (req, res)=> { //REST API
    if(req.body.delete_all){
        db.collection("plans").deleteMany(function(){
            res.json({state: "hamma rejalar o'chirildi"});
        });
    }
});



app.get("/", function(req, res) { //TRADITIONAL API
    console.log('user entered /');
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            // console.log(data);
            res.render("reja", { items: data });
        }
    });
})


module.exports = app;   
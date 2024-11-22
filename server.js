const http = require("http");
const app = require("./app");
const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://karimovislam5828859:hakim5828859@cluster0.wnfdz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client)=>{
    if(err) console.log("Error on connection MongoDB");
    else{
        console.log("MongoDB connection succeed"); 
        const app = require("./app");
        module.exports = client;

        const server = http.createServer(app); //serverga appni yuklayabmiza
        let PORT = 3000;
        server.listen(PORT, function(){
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
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

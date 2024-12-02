const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://karimovislam5828859:hakim5828859@cluster0.wnfdz.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, client) => {
    if(err) console.log("ERROR:", err);
    else {
        console.log("MongoDB connection succeed");
        // console.log(client);
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 6120;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`)
        })
    }
});
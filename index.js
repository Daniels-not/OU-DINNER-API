// imports

const express = require('express');
const app = express();
const cors = require("cors");
const startConnection = require("./server");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000
let methodOverride = require('method-override');
const cookieParser = require('cookie-parser')
const cookieSession = require("cookie-session");

require("dotenv").config()


// middleware

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(
    cookieSession({
        name: "oudinner-session",
        // keys: ['key1', 'key2'], 
        secret: "OUDINNER-COOKIES", // should use as secret environment variable
        httpOnly: true
    })
);

// routers

require("./Routes/Food")(app);
require("./Routes/Place")(app);
require("./Routes/Category")(app);
require('./Routes/Auth')(app);
require('./Routes/User')(app);

// listen app 

app.listen(PORT, () => {
    try {
        console.log("Initialized server on port: ", PORT);
        startConnection();
        console.log(`listening app in url http://localhost:${PORT}`);
    } catch(err) {
        console.log(err);
    }
});

// This keeps your server running and also give you a place to attach the debugger and look for a deeper problem.
process.on('uncaughtException', function (err) {
    console.log(err);
}); 

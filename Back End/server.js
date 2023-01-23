// external modules

const mongoose = require("mongoose");
const Role = require("./Schema/Role");
//db connection

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
};

function initial() {
        Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
            name: "user"
            }).save(err => {
            if (err) {
                console.log("error", err);
            }
    
            console.log("added 'user' to roles collection");
            });
    
            new Role({
            name: "moderator"
            }).save(err => {
            if (err) {
                console.log("error", err);
            }
    
            console.log("added 'moderator' to roles collection");
            });
    
            new Role({
            name: "admin"
            }).save(err => {
            if (err) {
                console.log("error", err);
            }
    
            console.log("added 'admin' to roles collection");
            });
        }
        });
}


const startConnection = () => {
    mongoose.set('strictQuery', true);
    mongoose
    .connect("mongodb://localhost:27017/OUDINNER", options)
    .then(() => {
        console.log("MongoDB connected… 🐱‍💻")
        initial()
    })
    .catch((err) => console.log(err.message));
}

module.exports = startConnection;
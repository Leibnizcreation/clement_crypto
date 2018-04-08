import mongoose from "mongoose"

mongoose.connect("mongodb://guest:guest@ds121588.mlab.com:21588/clement_crpto")
    .then(function (conn) {
        console.log("connection to database was successfulL")
    }).catch(function (err) {
        console.log("Error connecting to database")
    })
// process.env.PORT ? mongoose.connect("mongodb://guest:guest@ds245478.mlab.com:45478/clement_crypto").then((conn) => console.log("connection to database was successful")).catch((err) => console.log("Error connecting to database"))
//     : mongoose.connect("mongodb://127.0.0.1:27017/crypto").then((conn) => console.log("connection to database was successful")).catch((err) => console.log("Error connecting to database"))   
export default mongoose; 
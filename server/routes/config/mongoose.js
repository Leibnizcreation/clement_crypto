import mongoose from "mongoose"
var options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
mongoose.connect("mongodb://guest:guest@ds121588.mlab.com:21588/clement_crpto",options).then((conn) => console.log("connection to database was successful")).catch((err) => console.log("Error connecting to database")).catch
// process.env.PORT ? mongoose.connect("mongodb://guest:guest@ds245478.mlab.com:45478/clement_crypto").then((conn) => console.log("connection to database was successful")).catch((err) => console.log("Error connecting to database"))
//     : mongoose.connect("mongodb://127.0.0.1:27017/crypto").then((conn) => console.log("connection to database was successful")).catch((err) => console.log("Error connecting to database"))   
    export default  mongoose; 
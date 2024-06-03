const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();

const cors = require("cors");
app.use(cors(
  {
    origin: ["https:://deploy-mern-1whq.vercel.app"],
    methods:["POST", "GET", "DELETE" ,"PATCH"],
    credentials:true
  }
))

const userRoute = require("./routes/userRoute.js");

app.use(express.json());

app.use((req, res, next) => {
    if (req.originalUrl === '/favicon.ico') {
      res.status(204).end();
      return;
    }
    next();
  });






mongoose.connect(process.env.URI)
.then(()=>{
    console.log("connected successfully finally");
    app.listen(process.env.PORT || 8000 , (err)=>{
        if(err) console.log(err);

        console.log("Running successfully at", process.env.PORT)
    });
})
.catch((error)=>{
    console.log("error", error)
});

app.use(userRoute)




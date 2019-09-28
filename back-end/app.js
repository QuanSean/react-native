const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv/config");


app.use (bodyParser.urlencoded());
app.use (bodyParser.json())

const User = require ('./router/User');
app.use ('/user', User)


mongoose.connect(
    "mongodb+srv://quansean:150598bd!@shop-r6sxw.mongodb.net/test?retryWrites=true&w=majority",
    { useUnifiedTopology: true,
        useNewUrlParser: true, },
    (err, success) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected mongodb shop");
      }
    }
  );

app.listen(process.env.PORT || 2409,(err, success)=>{
    if (err)
    {
        console.log (err)
    }
    else 
    {
        console.log ("Connected port 2409")
    }
});
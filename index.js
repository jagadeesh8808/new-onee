var express = require("express");
var app = express();
app.path = require("path");
// app.use(express.static("contents"));
var path = require('path')
app.use(express.static(path.join(__dirname,"pages")));
//app.use(express.static(path.join(__dirname," ")));
app.use(express.static(path.join(__dirname, "public")));




app.get("/admin/dashboard", function(req,res){
    res.sendFile(__dirname + "/pages/index.html");
});
app.get("/admin/doctor", function(req,res){
    res.sendFile(__dirname + "/pages/doctor.html");
});
app.get("/admin/doctor-details", function(req,res){
    res.sendFile(__dirname + "/pages/doctor-details.html");
});

app.get("/admin/Patient", function(req,res){
    res.sendFile(__dirname + "/pages/patient.html");
});

app.get("/admin/Patient-details", function(req,res){
    res.sendFile(__dirname + "/pages/Patient-details.html");
});
app.get("/admin/Appointment", function(req,res){
    res.sendFile(__dirname + "/pages/Appointment-details.html");
});
app.get("/admin/reviews", function(req,res){
    res.sendFile(__dirname + "/pages/reviews.html");
});
app.get("/login", function(req,res){
    res.sendFile(__dirname + "/admin/page-login.html");
});
app.get("/register", function(req,res){
    res.sendFile(__dirname + "/admin/page-register.html");
});
app.get("/admin/calendar", function(req,res){
    res.sendFile(__dirname + "/pages/app-calender.html");
});
app.get("/admin/compose", function(req,res){
    res.sendFile(__dirname + "/pages/email-compose.html");
});
app.get("/admin/inbox", function(req,res){
    res.sendFile(__dirname + "/pages/email-inbox.html");
});
app.get("/admin/read", function(req,res){
    res.sendFile(__dirname + "/pages/email-read.html");
});



app.use(express.static(path.join(__dirname, '/admin')));


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://chandu:chandu123@cluster0.wobdj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(console.log('Successfully Connected To MongoDB Database.'))

const connection = mongoose.connection;

const Admin = new mongoose.Schema(
    {
        // data:Object,
        name:String,
        mobile:Number,
        pwd:String,
    }
    );

const AdminData = connection.model("AdminData" , Admin);


app.get("/login", function(req,res){
    res.sendFile(__dirname + "/admin/page-login.html");
});

app.get("/register", function(req,res){
    res.sendFile(__dirname + "/admin/page-login.html");
});

app.post("/signupdata", function(req,res){
    //res.sendFile(__dirname + "/template/home1.html");
    console.log("string")
    console.log(req.body);
    // var insertData = {
    //     name:req.body.name,
    //     mobile:req.body.mobile,
    //     pwd:req.body.pwd,
    // }
    // AdminData.create(insertData,function(err, result){
    //             if(err){
    //                 console.log(err)
    //             }
    //             else{
    //                 res.send(result);
    //             }
    //         });
});



app.listen(8080, ()=> console.log("Successfully Server Started"));



// var express = require("express");
// var app = express();
// app.path = require("path");
// // app.use(express.static("contents"));
// var path = require('path')



// Mongodb Database Connection



// app.get("/data" , function(req,res){
//     PortfolioData.findOne({Name:"SEERAM.SANDEEP LAKSHMAN KUMAR"},function(err, result){
//         if(err){
//             console.log(err)
//         }
//         else{
//             res.send(result);
//         }
// })

// });
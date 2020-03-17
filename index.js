const express=require('express');
const http=require('http');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
const port=process.env.PORT || 3000;
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
const expressHandlebars= require('express-handlebars');

//dist folder 
app.use(express.static('frontend'));

//============imports routes
const listingRoutes=require("./routes/listing");
const userRoutes=require("./routes/user");



//connect to database
mongoose.connect(process.env.mongodb://ajitgupta:ajitgupta@cluster0-shard-00-00-smarh.mongodb.net:27017,cluster0-shard-00-01-smarh.mongodb.net:27017,cluster0-shard-00-02-smarh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority,{ useNewUrlParser: true,useUnifiedTopology: false},()=>
	console.log("connected to DB"));
//====== middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


//routes middlewear
app.use('/api/listings', listingRoutes);
app.use("/api/user", userRoutes);
app.use(express.json());

app.listen(port,function(req,res){
	console.log("server is running");
})


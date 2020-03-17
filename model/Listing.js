const mongoose=require('mongoose');
const listingSchema=new mongoose.Schema({
	title:{
		type:String,
	},
	price:{
		type:String,
	},
	locality:{
		type:String,
	},
	details:{
		type:String
	}
});
module.exports=mongoose.model("Listing",listingSchema);
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catsList');
var db = mongoose.connection;

db.on('error' , function(){
	console.log('mongoose not Connected !')
})
db.once('open' , function () {
	console.log("mongoose Connected !")
})


let catSchema = mongoose.Schema({
  
  catName:String,
  ownerEmail:String,
  imageUrl:String,
  adoptionMessage:String
});

let Cat = mongoose.model('Cat', catSchema);

let save = (data,callback) => {
  // TODO: Your code here
  var item = new Cat(data)
  item.save(function(err){
  	if(err){
  		console.log(err);
  	} else {
      return callback();
  	}
  })
  
  
}

module.exports.save = save;
module.exports.Cat = Cat;

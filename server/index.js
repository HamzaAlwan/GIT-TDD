const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../angular-client/')));

app.get('/cats', function (req, res) {
  // TODO - your code here!
  db.Cat.find({},function(err, data){
  	if(err){
  		console.log(err);
  	} else {
  		//console.log("lolo",data)
  		res.send(data)
  	}
  })
  

});

app.post('/cats', function (req, res) {
  // TODO - your code here!
//console.log(req.data);
// var item = new Cat(data)
//   item.save(function(err){
//     if(err){
//       console.log(err);
//     } else {
//       return callback();
//     }
//   })

  res.send(req.body)

 });


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
module.exports = app



//var caption=require('caption');//TODO REMOVE
var govTrack = require('govtrack-node');
var express = require('express');
var app = express();
app.use(express.static('images'))

app.get('/',function (req,res) {
	res.send('Hi');
})

var server = app.listen(8081,function () {
	var host = server.address().address
	var port = server.address().port

	console.log("WOrking at http://%s:%s",host,port)
})

app.get('/login',function(req,res) {
	res.send('Worked!');
})

app.get('/congress',function(req,res) {


	//res.send("loading...");
// list current members of Congress 
/*govTrack.findRole({ current: true }, function(err, gres) {
  if (!err) {
	res.send(gres);
    // res contains JSON data response 
  }
});*/
	govTrack.findVoteVoter({ vote:118997 }, function(err, gres) {
		//res.send(gres);
		var resObj=gres;
		var myStr='';
		if (!err) {
			for (x in resObj.objects) {
				if (resObj.objects[x].option.value=="Yea")
        			{
    					//myStr += resObj.objects[x].person.name +'-'+ resObj.objects[x].person_role.enddate +'-'+resObj.objects[x].option.value+"<br>";
					myStr += resObj.objects[x].person.name +'|'+ resObj.objects[x].person_role.enddate+'<br/>';
        			}
			}
/*			caption.path("./white.jpg",{
			  caption : myStr,
			  outputFile : "./images/congress.jpg",
			  minHeight : 1000
			},function(err,filename){
				var arr=filename.split('/');
			//	res.send(arr);
			  //res.send('<html><body><img src="'+arr[2]+'"/></body></html>');
			  // do stuff
			});*/
			res.send(myStr);
			// gres contains JSON data response 
  		}
	//});
})

/*app.get('/caption',function(req,res) {
caption.url("http://simonbisleygallery.com/art/biz00157.jpg",{
  caption : "john wayne,george sorus,tester von tester",
  outputFile : "./images/dredd.jpg"
},function(err,filename){
	var arr=filename.split('/');
//	res.send(arr);
  res.send('<html><body><img src="'+arr[2]+'"/></body></html>');
  // do stuff
});

})*/

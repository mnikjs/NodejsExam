var express = require('express');
var bodyParser = require('body-Parser');
var cookieParser = require('cookie-Parser');
var fs = require('fs');
var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+'/public'));//static 미들웨어

// get-> router 미들웨어
app.get('/', function(req,res){
	if(req.cookies.auth){//로그인 정보가 있을 경우
		//res.send('<h1>Login Success</h1> <br> <a href="/login.html">Log out</a>');
		res.send('<h1>Login Success</h1>'+
			'<form method="POST" action="/logout">'+
			'<input type="submit" value="Logout"/>'+
			'</form>');
	}else{//로그인을 하지 않았으면 무조건 로그인 페이지로
		res.redirect('/login');
	}
});
app.post('/logout', function(req, res){
	res.clearCookie('auth');
	res.redirect('/');
});
app.get('/login', function(req,res){
	fs.readFile(__dirname+'/public/login.html',function(err, data){
		if(err){
			res.send(JSON.stringify(err));
		}else{
			res.send(data.toString());
		}
	});
});
app.post('/login', function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	if(username == 'hong' && password == '1234'){
		res.cookie('auth', true);
		res.redirect('/');
	}else{
		res.redirect('/login');
	}
});

app.get('/a', function(req,res){
	res.send('<a href="/b">Go To B</a>');
});
app.get('/b', function(req,res){
	res.send('<a href="/page/222">Go To params</a>');
});
app.get('/page/:id', function(req,res){
	var id = req.params.id;
	res.send('<h1>'+id+' page</h1>');
});

/*app.use(function(req,res){
	//res.writeHead(200,{'Content-Type':'text/html'});
	//res.end('<h1>Hello, Express</h1>');
	
	//res.send('<h2>Hello, Express</h2>');

	// var output = [];
	// for(var i=0 ; i<3 ; i++){
	// 	output.push({
	// 		count: i,
	// 		name: 'name - ' + i
	// 	});
	// }
	// res.send(output);

	var name = req.query.name;
	var region = req.query.region;

	// console.log(req);
	var agent = req.header('User-Agent');
	if(agent.toLowerCase().match(/chrome/)){
		res.send('<h1>Hello, Chrome</h1>'+
			'name:'+name+'<br>region:'+region);
	}else{
		res.send('<h1>Hello, others</h1>');
	}
	
	// var object = {
	// 	name:'Hong',
	// 	age:30,
	// 	marriage:false,
	// 	friends:['John','Sue'],
	// 	job:{
	// 		name:'salaryman',
	// 		income:100
	// 	}
	// }
	// res.send(JSON.stringify(object));


});*/

app.listen(52273, function(){
	console.log('Server Running...');
});
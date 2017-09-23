var http = require('http');

http.createServer(function(req,res){
	var cookie = req.headers.cookie;

	res.writeHead(200,{'Content-Type':'text/html','Set-Cookie':['name=RintIanTta','region=Seoul']});
	res.end('<h1>' + JSON.stringify(cookie)+'</h1>');
}).listen(52273, function(){
	console.log('Server Running at http://127.0.0.1:52273');
});
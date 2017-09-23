var crypto = require('crypto');

var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

console.log('crypto_hash:', output);
console.log('--------암복호화----------');

var key = 'kjs';
var input = 'PASSWORD';

//암호화
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

//복호화
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64','utf8');
var decipheredOutput = decipher.final('utf8');

//출력
console.log('원래 문자열:'+input);
console.log('암호화:'+cipheredOutput);
console.log('암호화 해제:'+ decipheredOutput);

console.log('--------------------------');

var fs = require('fs');
var data = {password:input, output:output, cipheredOutput:cipheredOutput};
fs.writeFile('password.txt', JSON.stringify(data),'utf8',function(err){
	if(err){
		console.log(err);
	}else{
		console.log('write completed...');
		fs.readFile('password.txt', 'utf8', function(err, data){
			if(err){
				console.log(err);
			}else{
				console.log('data='+data);
			}
		});
	}
});






















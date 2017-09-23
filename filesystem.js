var fs = require('fs');

//var text = fs.readFileSync('readme.md', 'utf8');
//console.log(text);
fs.readFile('readme.md', 'utf8', function(error, data){
	console.log(data);
});

var data = 'Hello world';

fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function (error){
	console.log('WRITE FILE ASYNC COMPLETE');
});

fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');
//전역변수 출력
console.log('filename:', __filename);
console.log('dirname:'+ __dirname);

//console 전역객체 사용
console.log('숫자:%d + %d = %d', 273, 52, 273+52);
console.log('문자열:%s', 'Hello world...!', '특수기호와 상관없음');
console.log('Json:%j',{name:'Hong', age:'29'});
console.log('Json:'+{name:'Hong', age:'29'});
console.log('Json:'+JSON.stringify({name:'Hong', age:'29'}));

var obj = {name:'Hong'};
console.log('obj='+obj);
obj = JSON.stringify(obj);//객체 -> 문자열로 변환
console.log('obj='+obj);
obj = JSON.parse(obj);//문자열 -> 객체로 변환
console.log('obj='+obj);

var module = require('./module.js');
console.log('abs(-273)=%d', module.abs(-273));
console.log('circleArea(3)=%d', module.circleArea(3));
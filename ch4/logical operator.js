console.log(true && true)//true
console.log(true && false)//false
console.log(false && true)//false
console.log(false && false)//false

var id = 'jamsuham';
var pw = '1111';
var result = (id =='jamsuham'&&pw == '1111') ? "로그인되었습니다" : "아이디 또는 비번이 틀렸습니다.";
console.log(result);

console.log(false && 'jamsuham'); //false
console.log(true && 'jamsuham'); //jamsuham
console.log('jamsuham' && false); //false
console.log('jamsuham' && true); //true
console.log('jamsuham' && '1111'); //1111
console.log(null && false); //false
//하나라도 false가 있으면 false
//아닐경우 가장 오른쪽 피연산자 값 반환

console.log(true || true);  //true
console.log(true || false);//true
console.log(false || true);//true
console.log(false || false);//false
//두개다 false일 경우만 false

var age = 30;
var result = (age > 65 || age < 7) ? "지원대상입니다." : "지원 대상이 아닙니다.";
console.log(result);

console.log(false || 'jamsuham');//jamsuham
console.log(ture || 'jamsuham');//ture
console.log('jamsuham' || false);//jamsuham
console.log('jamsuham'||true);//jamsuham
console.log('jamsuham'||'1111');//jamsuham
console.log(null||false);//false
//두개다 false일 경우만 false
//가장 왼쪽 피연산자 값 반환

console.log(!false);//true
console.log(!true);//false

console.log(!'jamsuham');//false
console.log(!null);//true
console.log(!0);//true
//!연산자는 불리언형으로 변환하여 반환
//문자=ture

var id = 'jamsuham';
var result = (id !== null && id !==undefined) ? "아이디가 입력되었습니다.":"아이디가 입력되지 않았습니다.";
console.log(result);

var id = 'jamsuham';
var result = (id ?? null) ? "아이디가 입력되었습니다.":"아이디가 입력되지 않았습니다.";
console.log(result);
//(id !== null && id !==undefined) = (id ?? null)
var num = 10;
console.log(num);

// 비교 연산자
num = 10;
var sNum = "10";
console.log(num === sNum); // == : true가 출력됨
var num2;
console.log(!!num2);
/*
    !(not) 연산자를 활용하여 문자, 숫자 등의 자료를 논리데이터로 변환하는 법
    var num = 10;
    !!num -> true 
    num = 0;
    !!num -> false

    var str = "test";
    !!str -> true
    str = ""
    !!str -> false 
    즉, !! 는 값이 있을땐 true 없을땐 false / 값이 있는지를 확인함

    var array = [1, 2, 3];
    !! array -> true
    array = [];
    !! array -> true
    !!array.length -> false
    array.length === 0 -> false
*/

console.log("/////////////////////////////////////////");

var num = 0;
console.log(!!num); // false
var str = "";
console.log(!!str); // false
var array = []; 
console.log(!!array.length); // false
var a;
console.log(!!a); // false
var b = null;
console.log(!!b); // false
var c = 0 / 0;
console.log(!!c); // NaN : 계산할 수 없다 라는 뜻 -> false

if(num === 0) {
    var num2 = 20;
    console.log("num은 0입니다.");
    if(!!num2) {
        console.log("num2는 값이 있습니다.")
    }
}

if(!str) {
    console.log("빈 문자열입니다.");
}

if(!b) {
    console.log("Null 입니다. ");
}
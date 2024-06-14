// 호이스이팅
console.log(a); // 오류

var a;
// 변수 선언은 됬다
a = 10;

var b = 10;
console.log(b);

var b = 20;
console.log(b);

let c = 30;
console.log(c);
c = "40";

const d = 50;
console.log(d);
// d = 60; 재할당(초기화)가 안됨 < const
// console.log(d); 오류가 뜬다 



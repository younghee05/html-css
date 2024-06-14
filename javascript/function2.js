const USERNAME ="admin";
const PASSWORD = "1234";

function login(username, password) {
    if(USERNAME === username && PASSWORD === password) {
        console.log("로그인 성공");
        return;
    }

    console.log("로그인 실패");
}

//함수를 변수에 집어넣을 수 있다
const login2 = login;

// 변수로 호출할 수도 있다 
login2("admin", "1234"); 

// 변수에 함수 자체를 넣어버렸다
const add2 = function add(x, y) {
    return x + y;
}

console.log(add2(10, 20));

// 익명 함수 
const sub2 = function (x, y) {
    return x - y;
}

console.log(sub2(20, 10));

// 화살표 함수 (람다) / function이 ' => '로 바뀌게 된다 
let div = (x, y) => {
    return !x || !y ? 0 : x / y;
}

console.log(div(10,2));

//화살표 함수(명령이 한줄)
div = (x, y) => !x || !y ? 0 : x / y;

console.log(div(10, 2));

// 화살표 함수(매개변수가 하나면 괄호 생략 가능)
const print = (data) => console.log(data);

print("출력!");

// 함수 안에 함수를 정의 할 수 있다 / function안에 function을 쓸 때 람다식(화살표)으로 표시를 해야한다
function main() {
    const test = () => {
        console.log("테스트 함수 호출");
    }
    
    test();
}

main();
// test(); // main 안에 정의 되있기때문에 밖에서는 출력이 안된다
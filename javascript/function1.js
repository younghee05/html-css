// 함수 정의
// 순서 1번
function add(x, y) {
    return x + y;
}

const result = add(10, 20); // 3번 add로 홀출된거
console.log(result); // undifined

// 2번 ()
function add(x, y, z) {
    console.log(x); // 4번 / 10번
    console.log(y); // 5번 / 11번 undefined
    console.log(z); // 6번 / 12번 undefined 
}

add(10, 20, 30); // 9번 / 호이스팅이 일어나서 10번으로 반복


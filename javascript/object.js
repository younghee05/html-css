// object : 객체 
// user라는 객체 안에 변수를 선언 하겠다
const user = {
    username: "admin", // 변수명 : value값
    password: "1234",
    name: {
        lastName: "김",
        firstName: "영희"
    },

    // print : 함수의 변수명
    print: () => {
        console.log("사용자이름: " + user.username);
        // ` ` ${} : 문자열을 합치도록 씀
        console.log(`비밀번호: ${user.password}`)
    } // 여기에 , 가 있어도 되고 없어도 되고 
};

console.log(user);
console.log(user.username);
console.log(user.password);
console.log(user.name.lastName);
console.log(user.name.firstName);
user.print();

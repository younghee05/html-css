// 중요!!
// 비구조 할당, 구조 분해
function main() {
    const user = {
        username: "admin",
        password: "1234",
        name: "김영희",
        email: "aaa@gmail.com"
    }

    const names = ["김익명", "박익명", "이다빈", "최익명"]

    // user안에 있는 값을 하나씩 꺼내 쓸 수 있다
    const { username, password, email} = user; 
    console.log(username);
    console.log(password);
    console.log(email);

    const [a, b] = names;
    console.log(a);
    console.log(b);

    //rest
    const {name, ...newUser} = user;  // const {변수명, ...변수명} = user; 
    console.log(newUser);

    console.log(name.slice(1, 2)); // slice : 1에서 n까지 가져오겠다 라는 뜻

}

main()
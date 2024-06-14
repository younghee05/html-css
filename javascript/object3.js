function modifyUser(user, target, value) {
    const newUser = {
        ...user, // ...user : user 객체 안에 들어간 값들을 표현
        [target]: value // target안에 키값을 쓰겠다 / []를 치면 target자체가 키값이 되버리고 안치면 username이라는 키값을 사용하게 된다
    };
    return newUser;
}

function main() {
    const user = {
        username: "admin",
        password: "1234"
    }

    delete user.password; // user에 password를 지운다는 뜻

    console.log(user);

    const newUser = modifyUser(user, "username", "test-user");
    console.log(newUser);

    const newUser2 = modifyUser(newUser, "password", "1111"); // target이 password가 선언됨
    console.log(newUser2);

    const userList = [ user, newUser ]; // 100(주소)
    // userList의 배열값을 그대로 복사하고 newUser2라는 새로운 값을 추가
    const newUserList = [ ...userList, newUser2 ]; // 200(주소) / ...userList : userList배열안에(user, newUser) 있는 것을 가지고옴

    // 스프레드 -> 깊은 복사 

    const userList2 = userList; // 얕은 복사 

    const [a, b, c] = newUserList;
    
    const { username, password } = newUserList[0];
}

main();
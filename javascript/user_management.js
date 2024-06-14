const names = [ "김영희", "김일희", "김이희" ]
console.log(names.join());

let userList = [];
let emptyUser = {
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");

    // 반복돌리겠다
    userTableBody.innerHTML = userList.map(({username, password}, index) => { // map : 기존에 List에 있던걸 새로운 List로 옮기는 것 
        // tr -> 하나의 문자열로 설정하겠다 
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${username}</td>
                <td>${password}</td>
            </tr> 
        `; 
    }).join(""); // join : list를 문자로 합치는 것 / 쉼표를 공백으로 바꾸겠다는 뜻
}

function handleUserInputKeyDown(e) {
    user = {
        ...user, // 자기자신을 계속 쌓는 거
        [e.target.name]: e.target.value 
    }

    if(e.keyCode === 13) {
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");

        if(e.target.name === "username") {
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            userList =[ ...userList, { ...user } ]; // 새로운 정보를 추가

            renderTable();

            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;
            
            usernameInput.focus();
        }
    }
    console.log(e.target.name);
}
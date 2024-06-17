// const names = [ "김영희", "김일희", "김이희" ]
// console.log(names.join());

// inputMode = 1 > 추가
// inputMode = 2 > 수정
let inputMode = 1;

let userList = [];
loadUserList();

let emptyUser = {
    id : 0,
    name: "",
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body"); // user-table-body를 들고옴

    // 반복돌리겠다
    userTableBody.innerHTML = userList.map(({id, name, username, password}, index) => { // map : 기존에 List에 있던걸 새로운 List로 옮기는 것 
        // tr -> 하나의 문자열로 설정하겠다 
        return `
            <tr>
                <th><input type="checkbox" onchange="handleUserCheck(event)"></th>
                <td>${index + 1}</td>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${password}</td>
                <th><button onclick="deleteUser(event)" value="${id}">삭제</button></th>
            </tr> 
        `; 
    }).join(""); // join : list를 문자로 합치는 것 / 쉼표를 공백으로 바꾸겠다는 뜻
}

function handleUserInputKeyDown(e) {
    user = {
        ...user, // 자기자신을 계속 쌓는 거
        [e.target.name]: e.target.value 
    }

    // user[e.target.name] = e.target.value;

    if(e.keyCode === 13) {
        const nameInput = document.querySelector(".name-input");
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        
        if(e.target.name === "name") {
            usernameInput.focus();
        }

        if(e.target.name === "username") {
            passwordInput.focus();
        }

        if(e.target.name === "password") {
            userList = [ ...userList, { ...user, id: getNewId() } ]; // 새로운 정보를 추가

            saveUserList(); // 저장시킨거
            renderTable();

            nameInput.value = emptyUser.name;
            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;

            nameInput.focus();
            
         
        }

    }
}

function saveUserList() {
    localStorage.setItem("userList", JSON.stringify(userList));
}

function loadUserList() {
    const lsUserList = localStorage.getItem("userList");
    userList = !lsUserList ? [] : JSON.parse(lsUserList);
    renderTable();
}

function deleteUser(e) {
    userList = userList.filter(({id}) => id !== parseInt(e.target.value)) // e.target.value 인 애들 빼고 담아라 / parseInt : 문자열을 정수로 형변환 시켜준것
    saveUserList();
    renderTable();
}

function getNewId() {
    const userIds = userList.map(user => user.id);
    const maxUserId = userIds.length === 0 ? 20240000 : Math.max.apply(null, userIds);
    return maxUserId + 1;
}

function handleUserCheck(e) {
    const checkBoxList = document.querySelectorAll('input[type ="checkbox"]');
    
    for(let i = 0; i < checkBoxList.length; i++) {
        const checkBox = checkBoxList[i];
        if(e.target === checkBox) {
            continue;
        }
        checkBox.cheked = false;
    }
}
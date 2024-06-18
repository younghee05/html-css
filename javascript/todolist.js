let todoList = [];
loadTodoList();

let emptyTodo = {
    id: 0,
    content: "",
    date: ""
}

let todo = {
    ...emptyTodo
}

function handleTodoInputKeyDown(e) {
    if(e.keyCode === 13) {
        handleTodoOkClick();
    }
}

// handleTodoOkClick은 handleTodoInputKeyDown에서도 출력된다.
function handleTodoOkClick(e) {
    const todoInput = document.querySelector(".todo-input");
    if(isBlank(todoInput)) {
        alert("내용을 입력하세요.");
        clearTodoInput(); 
        return;
    }
    addTodo();
    clearTodoInput(); 
}

function addTodo() {

    const todo = {
        id: createNewId(),
        content: document.querySelector(".todo-input").value,
        date: transformDate(new Date())
    }

    todoList = [ ...todoList, todo ];
    saveLocalStorage();
    loadTodoList();

    // console.log(todo);

}

function createNewId() {
    const todoIdList = todoList.map(todo => todo.id);
    const maxId = !todoIdList.length ? 0 : Math.max.apply(null, todoIdList); // 최대값
    return maxId + 1;

}

function saveLocalStorage() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function loadTodoList() {
    const lsTodoList = localStorage.getItem("todoList");
    todoList = !lsTodoList ? [] : JSON.parse(lsTodoList); // 삼항연산
    renderTodoList();
}

function renderTodoList() {
    const todoListContainer = document.querySelector(".todo-list-container");
    todoListContainer.innerHTML = todoList.map(todo => {

        return `
            <li class="todo-card">
                    <h3 class="todo-date">${todo.date}</h3>
                    <p class="todo-content">${todo.content}</p>
                <div class="todo-buttons">
                    <button class="button edit-button" onclick="handleEditClick(event)" value="${todo.id}">수정</button>
                    <button class="button delete-button" onclick="handleDelecteClick(event)" value="${todo.id}">삭제</button>
                </div>
            </li>
        `;
    }).join("");
}

function clearTodoInput() {
    const todoInput = document.querySelector(".todo-input");
    todoInput.value = "";
    todoInput.focus();
}

function isBlank(input) {
    return !input.value.replaceAll(" ", "");
}

function transformDate(date) {
    const dayList = [ "일", "월", "화", "수", "목", "금", "토"];

    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} (${dayList[date.getDay()]}) ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // 2024.06.18

    // const now = new Date();
    // const year = now.getFullYear();
    // const month = now.getMonth(); // 0 ~ 11월
    // const date = now.getDate();
    // const day = now.getDay(); // 요일 

}

function handleDelecteClick(e) {
    if(confirm("정말로 삭제하시겠습니까?")) {
        todoList = todoList.filter(todo => todo.id !== parseInt(e.target.value));
        saveLocalStorage();
        loadTodoList();
    }
}


function handleEditClick(e) {
    
    const element = `
        <div class="modal-edit-container" onclick="event.stopPropagation()"> 
            <h3 class="modal-title">TODO 수정하기</h3>
            <div class="input-box">
                <input type="text" class="todo-input" onkeyDown="if(event.keyCode === 13) document.querySelector('.modal button:nth-of-type(1)').click()">
            </div>
            <div class="todo-buttons">
                <button class="button" onclick="handleEditOkClick(event)" value="${e.target.value}">확인</button>
                <button class="button" onclick="closeModal()">취소</button>
            </div>
        </div>
    `;
    openModal(element);
    const todoInput = document.querySelector(".modal .todo-input");
    todoInput.focus();
    
}

function handleEditOkClick(e) {
    console.log(e)
    todoList = todoList.map(todo => {
        if(todo.id === parseInt(e.target.value)) {
            return {
                ...todo,
                content: document.querySelector(".modal .todo-input").value,
                date: transformDate(new Date)
            }
        }
        return todo;
    })
    saveLocalStorage();
    closeModal();
    loadTodoList();
}

function handleModalBackgroundClick() {
    closeModal();
}


function openModal(element) {
    const modal = document.querySelector(".modal");
    modal.classList.add("modal-show");
    modal.innerHTML = element;
}

function closeModal() {
    const modal = document.querySelector(".modal");
    modal.innerHTML = "";
    modal.classList.remove("modal-show");
    
}
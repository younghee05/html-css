function handleButtonClick(e) {
    console.log({event: e});
    // target은 this랑 똑같은 역할을 한다
    e.target.innerHTML = "취소"

}

// 키보드 입력을 제어할수 있다
function handleInputChange(e) {
   if(e.ctrlKey && (e.keyCode === 13 || e.key === "Enter")) {
    alert(e.target.value);
   }
}

let isFocus = false;

function handleInputFocus(e) {
    if(!isFocus) {
        isFocus = true;
        alert("입력하세요!");
    }
    
}

// 입력을 했는데 다시 클릭할 시 사라지게 하는 기능
function handleInputFocus(e) {
    if(!!e.target.value) {
        e.target.value = "";
    }
}

function handleInputBlur(e) {
    if(!e.target.value) {
        alert("값을 입력해주세요.")
    }
}
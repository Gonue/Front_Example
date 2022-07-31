const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    //form을 submit하면 브라우저는 기본적으로 페이지 새로고침 하도록 설정
    //preventDefault 을 호출시 브라우저 기본동작 제한
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    PaintGreetings();
}

function PaintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const SaveUsername = localStorage.getItem(USERNAME_KEY);
console.log(SaveUsername);
if(SaveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

    //show the form
}else{
    //greethings
    PaintGreetings();
}
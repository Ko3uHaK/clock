const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    hello = document.querySelector('.js-hello');
const USER_LS = 'curentUsername',
    SHOWING_CN = 'showing';
    function saveUsername(text){
        localStorage.setItem(USER_LS, text);
    }
function submitHandler(event){
        event.preventDefault();
        const inputValue = input.value;
        showHello(inputValue);
}
function showHello(text){
    hello.innerText = `Привет, ${text}`;
    hello.classList.add(SHOWING_CN);
    form.classList.remove(SHOWING_CN); 
    
}
function askForUsername(){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', submitHandler);
}
function loadUsername(){
    const curentUsername=localStorage.getItem(USER_LS);
    if(curentUsername === null){
        askForUsername();
    }else{
        showHello(curentUsername);
    }

}

function init(){
    loadUsername();
}
init();
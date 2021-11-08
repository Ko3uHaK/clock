const toDoForm = document.querySelector('.js-toDoForm'),
      toDoInput = toDoForm.querySelector('input'),
      toDoList = document.querySelector(".js-toDoList");
const TODO_LS ='toDo';
      function loadToDo(){
          const todo = localStorage.getItem(TODO_LS);
          if(todo !== null){

          }
      }

function showToDo(text){
    console.log(text);
}

function submitHandler(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    showToDo(currentValue);
    toDoInput.value = '';
}

      function init(){
        loadToDo();
        toDoForm.addEventListener('submit', submitHandler);
      }
      init();


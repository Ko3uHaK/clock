const toDoForm = document.querySelector('.js-toDoForm'),
      toDoInput = toDOForm.querySelector('input'),
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
    const currentValue = toDoForm.value;
    showToDo(currentValue);
}

      function init(){
        loadToDo();
        toDOForm.addEventListener('submit', submitHandler);
      }
      init();


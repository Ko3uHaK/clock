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
    const li = document.createElement('li');
    const delBtn = document.createElement('delBtn');
    const span = document.createElement('span');
    delBtn.innerHTML ='❌';
    span.innerText =text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
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


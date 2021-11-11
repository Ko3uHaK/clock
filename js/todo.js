const toDoForm = document.querySelector('.js-toDoForm'),
      toDoInput = toDoForm.querySelector('input'),
      toDoList = document.querySelector(".js-toDoList");
const TODO_LS ='toDo';
const toDos =[];
      function loadToDo(){
          const todo = localStorage.getItem(TODO_LS);
          if(todo !== null){
            const parseToDo = JSON.parse(todo);
            parseToDo.forEach(function(toDo){
                showToDo(toDo.name);
            });
          }
      }

      function saveToDo(){
          localStorage.setItem(TODO_LS, JSON.stringify(toDos));
      }


      function deleteToDo(event){
        const btn = event.target;
        const li =btn.parentNode;
        toDoList.removeChild(li);
        const cleanTodo = toDos.filter(function(toDo){
          return toDo.id !== li.id;  
        });
      }
function showToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length +1;
    delBtn.innerHTML ='❌';
    delBtn.addEventListener('click',  deleteToDo);
    span.innerText =text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoobj ={
        name: text,
        id: newId
    };
    toDos.push(toDoobj);
    saveToDo();
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


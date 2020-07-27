var $addTodo = document.getElementById('addtodo').value;
const $todoList = document.getElementById('todolist');
const $todobtn = document.getElementById('btn');

function add() {
    $addTodo = document.getElementById('addtodo').value;
    if ($addTodo !== '') {
        document.getElementById('addtodo').value = '';
        let todo = $addTodo;
        let $todoItem = document.createElement('li');
        let todoId = new Date().getTime();
        $todoItem.innerHTML = `
        <input id="${todoId}" type="checkbox"/>
        <label for="${todoId}">${todo}</label>
            `;
        $todoList.appendChild($todoItem);
        $addTodo.value = "";
    }
}

$todoList.addEventListener('click', (e) => {
    if (e.target.checked) {
        e.target.parentElement.classList.add('completed');
    }
    else {
        e.target.parentElement.classList.remove('completed');
    }

});

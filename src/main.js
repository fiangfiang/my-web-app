let todos = [];

function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();

  if (text) {
    todos.push(text);
    input.value = '';
    renderTodos();
    console.log(todos); // 调试用：在控制台查看当前数据
  }
}

function renderTodos() {
  const list = document.getElementById('todoList');
  list.innerHTML = todos
    .map((todo, index) => `
      <li class="todo-item">
        <span>${index + 1}. ${todo}</span>
        <button class="delete-btn" onclick="deleteTodo(${index})">删除</button>
      </li>
    `)
    .join('');
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// 初始化渲染
renderTodos();
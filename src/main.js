let todos = [];

function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();

  if (text) {
    // 添加新的待办事项，包含文本和完成状态
    todos.push({
      text: text,
      completed: false
    });
    input.value = '';
    renderTodos();
    console.log(todos);
  }
}

function toggleTodo(index) {
  // 切换待办事项的完成状态
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById('todoList');
  list.innerHTML = todos
    .map((todo, index) => `
      <li class="todo-item">
        <input 
          type="checkbox" 
          ${todo.completed ? 'checked' : ''} 
          onchange="toggleTodo(${index})"
        >
        <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
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
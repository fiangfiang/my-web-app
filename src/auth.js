// 用户存储（生产环境应替换为后端API）
let users = JSON.parse(localStorage.getItem('users')) || [];

// 切换登录/注册表单
document.getElementById('switchToRegister').addEventListener('click', () => {
  document.querySelector('.login-box').classList.add('hidden');
  document.querySelector('.register-box').classList.remove('hidden');
});

document.getElementById('switchToLogin').addEventListener('click', () => {
  document.querySelector('.register-box').classList.add('hidden');
  document.querySelector('.login-box').classList.remove('hidden');
});

// 登录处理
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'index.html';
  } else {
    alert('邮箱或密码错误！');
  }
});

// 注册处理
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('newEmail').value;
  const password = document.getElementById('newPassword').value;

  if (users.some(u => u.email === email)) {
    alert('该邮箱已注册！');
    return;
  }

  const newUser = {
    id: Date.now().toString(),
    username,
    email,
    password // 生产环境应加密存储
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  sessionStorage.setItem('currentUser', JSON.stringify(newUser));
  window.location.href = 'index.html';
});
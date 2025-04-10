# 简易待办事项应用 (Todo List)

这是一个轻量级的待办事项 Web 应用，允许用户添加、查看和删除待办任务。该应用支持 PWA (Progressive Web App) 功能，可以安装到移动设备并离线使用。

## 功能特点

- 添加新的待办任务
- 查看所有待办任务列表
- 删除已完成的任务
- 支持 PWA，可安装到主屏幕
- 响应式设计，适配各种屏幕尺寸

## 技术栈

- 前端：HTML, CSS, JavaScript（原生）
- PWA 支持：Service Worker, Manifest
- 无需数据库，任务数据保存在浏览器会话中

## 使用方法

1. 克隆仓库到本地
   ```
   git clone [仓库地址]
   ```

2. 打开 index.html 文件或通过本地服务器运行
   ```
   # 如果已安装 Node.js，可以使用 http-server
   npx http-server
   ```

3. 在浏览器中访问应用（通常是 http://localhost:8080）

## 项目结构

```
my-web-app/
├── index.html          # 主页面
├── styles/             # CSS 样式文件
├── src/                # JavaScript 源代码
│   ├── main.js         # 主要功能逻辑
│   └── sw.js           # Service Worker 文件
└── public/             # 静态资源（图标等）
```

## 贡献指南

欢迎提交 Pull Request 或 Issue 来改进这个项目。

## 许可证

[ISC 许可证](LICENSE) 
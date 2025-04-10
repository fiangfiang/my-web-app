const { createCanvas } = require('canvas');
const fs = require('fs');

// 生成 512x512 图标
const canvas = createCanvas(512, 512);
const ctx = canvas.getContext('2d');

// 绘制渐变背景
const gradient = ctx.createLinearGradient(0, 0, 512, 512);
gradient.addColorStop(0, '#0984e3');
gradient.addColorStop(1, '#00cec9');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 512, 512);

// 添加文字
ctx.font = 'bold 100px Arial';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.fillText('TODO', 256, 280);

// 保存文件
fs.writeFileSync('./public/icon-512.png', canvas.toBuffer());
fs.writeFileSync('./public/icon-192.png', canvas.toBuffer('image/png', { width: 192, height: 192 }));
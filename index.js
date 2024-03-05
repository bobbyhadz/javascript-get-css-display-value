console.log('bobbyhadz.com');

const btn = document.getElementById('btn');

const display = window.getComputedStyle(btn).display;

console.log(display); // 👉️ "block"

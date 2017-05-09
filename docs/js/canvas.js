var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillRect(200, 250, 100, 100)
c.fillRect(100, 150, 100, 100)
c.fillRect(400, 550, 100, 100)
c.fillRect(800, 250, 100, 100)

console.log(canvas);

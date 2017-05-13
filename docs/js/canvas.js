var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//creeren van 2d objecten in de Canvas
var c = canvas.getContext('2d');


// c.fillStyle = "rgba(0,255,0,0.4)";
// c.fillRect(200, 250, 100, 100);
// c.fillStyle = "rgba(100,100,100,0.4)";
// c.fillRect(100, 150, 100, 100);
// c.fillStyle = "rgba(0,0,255,0.4)";
// c.fillRect(400, 550, 100, 100);
// c.fillStyle = "rgba(0,0,0,0.4)";
// c.fillRect(800, 250, 100, 100);
// c.fillStyle = "rgba(0,250,150,1)";
// c.fillRect(700, 400, 100, 100);

// console.log(canvas);


//Lijnen tekenen
// c.beginPath();
// c.moveTo(50,  300);
// c.lineTo(300, 100);
// c.lineTo(600, 90);
// c.lineTo(900, 600);
// c.lineTo(50,  300);
// c.lineTo(1200, 200);
// c.lineTo(1200, 800);
// c.strokeStyle = "red"; 
// c.stroke();

//Arc en/of cirkel tekenen
// c.beginPath();
// c.arc(300 ,300 , 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for (var i = 0; i < 200; i++) {
//     var x = Math.random() * window.innerWidth
//         ;
//     var y = Math.random() * window.innerHeight
//         ;
//     c.beginPath();
//     c.arc(x ,y , 30, 0, Math.PI * 2, false);
//     c.strokeStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
//     c.stroke();
// }

// aanmaak van de variabele van de muis, waarbij de coordinaten een waarden krijgen in de eventListener 'mousemove'
var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
// var minRadius = 3;

//kleur waardes van de kleur array die ervoor zorgt welke kleur elke cirkeltje krijgt.
var colorArray = [
    '#BD2320',
    '#CDCDCD',
    '#244036',
    '#797072',
    '#7B3F1E',

];

console.log();

// event listener voor de mouse move, waarbij de coordinaten worden uitgeprint in de console.
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);   

})

// als het venster van grootte word aangepast.
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

//cirkel word hier gedefineerd met de this waardes
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];


// hier worden de objecten getekend in de venster.
    this.draw = function() {
        c.beginPath();
        c.arc(this.x ,this.y , this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
            if( this.x + this.radius > innerWidth || 
                this.x - this.radius < 0) {
                this.dx= -this.dx;
            }

            if (this.y + this.radius > innerHeight || 
                this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            
            this.x += this.dx;
            this.y += this.dy;


            // interactivity waarbij de muis hover ervoor zorgt dat de cirkeltjes groter en kleiner worden.

            if  (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
                 mouse.y - this.y < 50 && mouse.y - this.y > -50
                ) {
                    if (this.radius < maxRadius) {
                        this.radius += 1;
                    }
                
                }   else if (this.radius > this.minRadius) {
                        this.radius -= 1;
                }
            
                this.draw();
            }
}

// maakt een array aan van de cirkeltjes die getekend worden.
var circleArray = [];

for (var i = 0; i < 2000; i++){
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    var radius = Math.random() * 3 + 1;
    circleArray.push(new Circle(x ,y ,dx ,dy , radius));

}

// creert cirkeltjes opnieuw als je je browser venster resized.
var circleArray = [];

function init(){
    
    circleArray = [];

    for (var i = 0; i < 2000; i++){
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        var radius = Math.random() * 3 + 1;
        circleArray.push(new Circle(x ,y ,dx ,dy , radius));
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight
        );
    for (var i = 0; i < circleArray.length; i++) {

        circleArray[i].update();
    }
}

init();
animate();




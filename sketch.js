var icona;
var iconaMida = 8;
var cadenes = [];
var numeros;


function preload(){
  nums = loadImage('2003.png');
  warn = loadImage('warner.png');
  vr = loadImage('vr.png');
  cuad = loadImage('cuad.png');
  myFont = loadFont('Matrix-MZ4P.ttf');
  mat = loadImage('MAT.png');
}

function setup() {
  numeros = new Numeros(160,550);
  createCanvas(475, 700);
  var x = 0;
  var y = -50;
  for (var i = 0; i<=width / iconaMida; i++) {
    var cadena = new Cadena();
    cadena.generaC(x, y);
    cadenes.push(cadena);
    x += iconaMida;
     
    
  }
  textSize(iconaMida);
  
  
}



function draw() {
  background(0);
  image(warn, 420, 650,20,20);
  cadenes.forEach(function(cadena){
    cadena.mostraC();
  });
  numeros.printic();
  fill(255, 255, 255);
  
  image(vr, 45, 650,30,20);
  image(cuad, 230, 650,20,20);
  image(mat, 185, 615,100,50);
}



//Definim la classe icona que seran els icones que aniran caient

function Icona(x, y, speed){ 
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.value;
  
  this.CanviarIcona = function(){
    this.value = String.fromCharCode(0x30A0 + random(0,96));
  }
  
  
  this.fall = function(){
    if(this.y >= height){
      this.y = 0
    } else{
    this.y += this.speed;}
  }
  
}

// Fi classe Icona



//Definim la classe Cadena que seran el conjunt d'icones que aniran caient

function Cadena(){
  this.icones= [];
  this.numIcon = round(random(15,25));
  this.speed = random(1,3)
  
  this.generaC = function(x, y){
    for (var i = 0; i <= this.numIcon; i++){
      icona = new Icona(x , y, this.speed);
      icona.CanviarIcona();
      this.icones.push(icona);
      y -= this.numIcon;
    }
    
  }
  
  this.mostraC = function() {
    this.icones.forEach(function(icona)
      { fill(0,225,140);
        text(icona.value, icona.x, icona.y);
        icona.fall();
        icona.CanviarIcona();})
  
  }
  
  
}

// Fi classe Cadena


function Numeros(x,y){
  this.x = x;
  this.y = y;
  //this.speed = speed;
  
  this.printic = function(){
      image(nums, this.x, this.y,150,40);
  }
  
  this.move = function(){
    this.x = mouseX;
    this.y = mouseY;
  }
  
  this.restart = function(){
    this.x = 160;
    this.y = 550;
  }
}



function mouseClicked(){
  
  if (mouseButton === LEFT){
    delete cadenes;
    cadenes = [];
    var x = 0;
    var y = -50;
    for (var i = 0; i<=width / iconaMida; i++) {
      var cadena = new Cadena();
      cadena.generaC(x, y);
      cadenes.push(cadena);
      x += iconaMida;
    numeros.restart();
    }
  }
  else if(mouseButton === RIGHT){
    numeros.move();
  }
  
  
}

function deviceShaken(){
  delete cadenes;
    cadenes = [];
    var x = 0;
    var y = -50;
    for (var i = 0; i<=width / iconaMida; i++) {
      var cadena = new Cadena();
      cadena.generaC(x, y);
      cadenes.push(cadena);
      x += iconaMida;
    numeros.restart();
    }
}


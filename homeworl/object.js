var img;
var bird
var x, y;

function preload(){

img=loadImage('bird.png')
}


function  setup(){

     createCanvas(800, 800); 
      
    
    image(img, 0,0, 100, 100)
    
    bird=new bird( 100, 100)
}


function bird(x, y){
        this.x=x;
        this.y=y;
    
    this.show = function() {
    
    
    image(img,this.x, this.y, 80, 80)}



this.move = function (){
    this.x += 1
    
}}



function draw (){
background('lightblue');    
bird.move()
bird.show()
    
    


}
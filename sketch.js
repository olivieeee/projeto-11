var homenzinho_correndo;
var chao;
var homenzinho;
var linhas
var edges
 

function preload(){
 homenzinho_correndo=loadAnimation("Runner-1.png","Runner-2.png")
 chao=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
linhas=createSprite(200,200)
linhas.addImage(chao)
linhas.velocityY=5
linhas.scale=1.3
  homenzinho=createSprite(100,160,20,50);
  homenzinho.addAnimation("correr", homenzinho_correndo);
homenzinho.scale=0.05
edges=createEdgeSprites()


}

function draw() {
  background(0);
drawSprites();
if (linhas.y>400){
  linhas.y=height/4.3
}
homenzinho.x=mouseX
homenzinho.collide(edges[3])
}


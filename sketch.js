var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 pathImg=loadImage("path.png")
 boyImg=loadAnimation("Jake1.png","Jake2.png")
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path=createSprite(200,200,50,50);
//adicione uma imagem para a pista
 path.addImage(pathImg);
 path.velocityY=4
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

//crie um sprite de menino
boy=createSprite(200,300);
boy.addAnimation("JakeRunning",boyImg)
boy.scale=0.8;
path=createSprite(200,200,50,50
  
  )
  
//adicione uma animação de corrida para ele

  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.x=World.mouseX
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)

  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}

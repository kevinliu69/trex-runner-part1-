
//https://studio.code.org/projects/gamelab/fafdPqCucSAm7veG_CcqS5luIZCsPdEsOfFDAJvcS_8
var trex,trexanimation
var ground,groundImage
function preload(){
trexanimation= loadAnimation("trex1.png","trex3.png","trex4.png")

groundImage=loadImage("ground2.png")
}
function setup(){
createCanvas(600,200)
trex=createSprite(30,175,69,69)
trex.addAnimation("dino",trexanimation)
trex.scale=0.3

ground=createSprite(300,190,600,10)
ground.addImage("ground",groundImage)
}

function draw(){
    background("red")
drawSprites()
ground.velocityX=-4
if(keyDown("space")) {
trex.velocityY=-4

}
trex.velocityY=trex.velocityY+0.5
trex.collide(ground)
}

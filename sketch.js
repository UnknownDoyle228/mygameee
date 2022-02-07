var bg, bgImage;
var pc;
var squareImage,  triangleImage, circleImage;
var squareSprite, triangleSprite, circleSprite;
var squareGroup, triangleGroup, circleGroup;
var score = 0;
var lives = 4;
var gameState="play";
var edges;

function preload(){
    bgImage = loadImage("./pictures/bg.jpg");
    squareImage = loadImage("./pictures/square.png");
    circleImage = loadImage("./pictures/circle.png");
    triangleImage = loadImage("./pictures/triangle.png");
}

function setup(){
    createCanvas(500,800);

    //create the playing character 
    pc = createSprite(250,400);
    pc.scale = 0.2
    pc.shapeColor = 0;

    //create the groups 
    triangleGroup = new Group();
    circleGroup = new Group();
    squareGroup = new Group();

     // create Edges
    edges=createEdgeSprites();
}

function draw(){
    //adding background image
    background(bgImage);
    
    //Displaying score and lives
    textSize(25);
    text("score:"+ score,40,50 );
    text("lives:"+ lives,190,50 );
   
    
    if(gameState==="play")
    {
    //pc controls
    if(keyDown(UP_ARROW)){
        pc.y=pc.y-5;
    }
    if(keyDown(DOWN_ARROW)){
        pc.y=pc.y+5;
    }
    if(keyDown(LEFT_ARROW)){
        pc.x=pc.x-5;
    }
    if(keyDown(RIGHT_ARROW)){
        pc.x=pc.x+5;
    }
    
    //Spawning NPC
    spawnTriangle();
    spawnCircle();
    spwanSquare();
    
    //pc collides with edges
    pc.collide(edges);
   
    //pc destroys npc
    pc.bounceOff(triangleGroup, destroySprite) ;
    pc.bounceOff(circleGroup, destroySprite) ;
    pc.bounceOff(squareGroup, squareDestroySprite);
   
    //end the game when lives reaches zero
    if(lives==0){
        gameState="end"
    }
       
    }
    
    if(gameState==="end")
    {
        textSize(40);
        fill("blue");
        stroke("white");        
        text("Game Over!",150,400);
    }
    console.log(score);
    drawSprites();
}

//destroy npc
function destroySprite(pc, sprite)
{
    sprite.destroy();
    score-=1;
    lives-=1;
}

function squareDestroySprite(pc, sprite)
{
    sprite.destroy();
    score+=5;
}

function spawnTriangle()
{
if(frameCount%100===0)
{
    //creating sprite triangle 
    var xPosition=Math.round(random(10, 480));
    var yPosition=Math.round(random(10, 780));
    triangleSprite = createSprite(xPosition, yPosition);
    triangleSprite.addImage("ts",triangleImage);
    triangleSprite.scale = 0.03;
    triangleSprite.lifetime = 400;



    triangleGroup.add(triangleSprite);

    // random movemnt
    var r=Math.round(random(1,8));
   // console.log(r);
    switch(r)
    {
        case 1: 
            triangleSprite.velocityX=-2;
            break;
        case 2: 
            triangleSprite.velocityX=2;
            break;
        case 3:
            triangleSprite.velocityY=-2;
            break;
        case 4:
            triangleSprite.velocityY=2;
            break;
        case 5:                         //up-left
            triangleSprite.velocityX=-2;
            triangleSprite.velocityY=-2;
            break;
        case 6:                            //right-down
            triangleSprite.velocityX=2;
            triangleSprite.velocityY=2;
            break;
        case 7:                             //up-right
            triangleSprite.velocityY=-2;
            triangleSprite.velocityX=2
            break;
        case 8:                             //down-left
            triangleSprite.velocityY=2;
            triangleSprite.velocityX=-2;
            break;

    }
}
}


function spawnCircle()
{
    if(frameCount%180===0)
    {
        //creating sprite triangle 
        var xPosition=Math.round(random(10, 480));
        var yPosition=Math.round(random(10, 780));
        circleSprite = createSprite(xPosition, yPosition);
        circleSprite.addImage("cs",circleImage);
        circleSprite.scale = 0.03;
        circleSprite.lifetime = 400;
    


        circleGroup.add(circleSprite);
        // random movemnt
        var r=Math.round(random(1,8));
       // console.log(r);
        switch(r)
        {
            case 1: 
                circleSprite.velocityX=-2;
                break;
            case 2: 
                circleSprite.velocityX=2;
                break;
            case 3:
                circleSprite.velocityY=-2;
                break;
            case 4:
                circleSprite.velocityY=2;
                break;
            case 5:                         //up-left
                circleSprite.velocityX=-2;
                circleSprite.velocityY=-2;
                break;
            case 6:                            //right-down
                circleSprite.velocityX=2;
                circleSprite.velocityY=2;
                break;
            case 7:                             //up-right
                circleSprite.velocityY=-2;
                circleSprite.velocityX=2
                break;
            case 8:                             //down-left
                circleSprite.velocityY=2;
                circleSprite.velocityX=-2;
                break;
    
        }
    }
}
function spwanSquare()
{

    


    if(frameCount%120===0)
    {
        //creating sprite triangle 
        var xPosition=Math.round(random(10, 480));
        var yPosition=Math.round(random(10, 780));
        squareSprite = createSprite(xPosition, yPosition);
        squareSprite.addImage("ss",squareImage);
        squareSprite.scale = 0.03;
        squareSprite.lifetime = 400;
    

        squareGroup.add(squareSprite);
        // random movemnt
        var r=Math.round(random(1,8));
       // console.log(r);
        switch(r)
        {
            case 1: 
                squareSprite.velocityX=-2;
                break;
            case 2: 
                squareSprite.velocityX=2;
                break;
            case 3:
                squareSprite.velocityY=-2;
                break;
            case 4:
                squareSprite.velocityY=2;
                break;
            case 5:                         //up-left
                squareSprite.velocityX=-2;
                squareSprite.velocityY=-2;
                break;
            case 6:                            //right-down
                squareSprite.velocityX=2;
                squareSprite.velocityY=2;
                break;
            case 7:                             //up-right
                squareSprite.velocityY=-2;
                squareSprite.velocityX=2
                break;
            case 8:                             //down-left
                squareSprite.velocityY=2;
                squareSprite.velocityX=-2;
                break;
    
        }
    }
}

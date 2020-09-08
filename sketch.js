var fixedRect, movingRect;

function setup()
{
createCanvas(800,800)

fixedRect=createSprite(200,200,50,80);
fixedRect.shapeColor = "turquoise";
fixedRect.debug = true;
movingRect=createSprite(400,200.80,30);
movingRect.shapeColor = "turquoise";
movingRect.debug = true;

gameObject1 = createSprite(100,100,50,50)
gameObject1.shapeColor = "green";
gameObject2 = createSprite(200,100,50,50)
gameObject2.shapeColor = "green";
}

function draw()
{
background(0,0,0);
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(isTouching(movingRect, gameObject1))
{
	movingRect.shapeColor = "red";
	gameObject1.shapeColor = "red";
}
else {
	movingRect.shapeColor = "turquoise";
	gameObject1.shapeColor = "turquoise";
}

drawSprites();
}

function isTouching(object1,object2)
{
	if(object1.x-object2.x < object2.width/2 + object1.width/2 &&
		object2.x-object1.x < object2.width/2 + object1.width/2 &&
		object1.y-object2.y < object2.width/2 + object1.width/2 &&
		object2.y-object1.y < object2.width/2 + object1.width/2)
	  {
		return true;
	  }
	  else 
	  {
		return false;
	  }

}
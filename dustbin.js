class Dustbin{
    constructor(x,y){
        this.x=x
        this.y=y
        this.dustbinWidth=100
        this.dustbinHeight=200
        this.wallThickness=20
        this.angle=0

        this.bottombody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true});
        this.leftWallbody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.dustbinHeight,this.wallThickness,{isStatic:true});
        Matter.Body.setAngle(this.leftWallbody,this.angle);

        this.rightWallbody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
        Matter.Body.setAngle(this.rightWallbody,this.angle);

        World.add(world,this.bottombody);
        World.add(world,this.leftWallbody);
        World.add(world,this.rightWallbody);
      
    }
    display(){
        var posbottom=this.bottombody.pos;
        var posLeft=this.leftWallbody.pos;
        var posRight=this.rightWallbody.pos;


       push();
       translate(posLeft.x,posLeft.y);
       rectMode(CENTER);
       //strokeWeight(4)
       angleMod(RADIANS);
       fill(255,0,255);
       stroke(255)
       rotate(this.angle);
       rect(0,0,this.wallThickness,this.dustbinHeight);
       pop();

       push();
       translate(posRight.x,posRight.y);
       rectMode(CENTER);
       //strokeWeight(4)
       angleMod(RADIANS);
       fill(255,0,255);
       stroke(255)
       rotate(-1*this.angle);
       rect(0,0,this.wallThickness,this.dustbinHeight);
       pop();

       push();
       translate(posbottom.x,posbottom.y);
       rectMode(CENTER);
       //strokeWeight(4)
       angleMod(RADIANS);
       fill(255,0,255);
       stroke(255)
       rect(0,0,this.dustbinWidth,this.wallThickness);
       pop();

    }
}
class ground{
    constructor(x,y,w,h)
{
var options={
    isStatic:true
}
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.Bodies.rectangle(this.x,this.y,this,w,this,h);
World.add(world,this.body);
}
display()
{
    var groundpos=this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill(255,0,255);
    pop();
}
}
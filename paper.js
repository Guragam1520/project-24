class Paper{
    constructor(x,y,r){
     var options={
         isStatic=false,
         restitution:0.3,
         density:1.2,
         friction=0.3
     }
    
     
     this.body.x=x;
     this.body.y=y;
     this.body.r=r;
     this.body=Bodies.circle(this.x,this.y,this.r/2,options);
    }
    display(){
        var pos=this.paper.position;
        push();
        translate(pos.x,pos,y);
        rectMode(CENTER);
       strokeWeight(3);
        fill(255,0,255);
        ellipse(x,y,r);
        pop()
    }
}
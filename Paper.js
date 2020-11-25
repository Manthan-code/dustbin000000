class Paper{
    constructor(){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.body = Bodies.circle(250,540,20,options);
        this.radius=20;
       this.Paper=loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.Paper,0,0,this.radius,this.radius);
        pop();
        
    }
}
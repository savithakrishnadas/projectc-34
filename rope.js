class Rope{
    constructor(aBody,bPoint){
        var options = {
            bodyA: aBody,
            pointB: bPoint,
            stiffness: 1.2,
            length: 400   
           }
            this.rope = Constraint.create(options);
            World.add(world,this.rope);
    }


    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.pointB;
            push();
            stroke(48,22,8);
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y)

            pop()
        }
       
    }
}
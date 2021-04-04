class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 100
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
               
    }
}
class SlingSHOT{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.SLING = Constraint.create(options);
        World.add(world, this.SLING);
    }

    udda(){
        this.SLING.bodyA = null;
    }

    display(){
        if (this.SLING.bodyA){
        var pointA = this.SLING.bodyA.position;
        var pointB = this.SLING.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
    }
    
}
class Bob{
    constructor(x, y,diameter) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic':true
        }
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x, y, diameter, options);
      this.diameter = diameter;
      World.add(world, this.body);
} 

display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill('lime');
    ellipse(0,0, this.diameter);
    pop();
  }

}
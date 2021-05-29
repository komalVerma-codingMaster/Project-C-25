class Paper {
     constructor() {
          var options = {
               isStatic: false,
               'restitution': 0.3,
               'friction': 0,
               'density': 1.2
          }
          this.body = Bodies.rectangle(100, 100, 50, 50, options);
          this.image = loadImage("paper.png")
          World.add(world, this.body);
     }

     display() {

          this.body.position.x = mouseX;
          this.body.position.y = mouseY;

          imageMode(CENTER);
          image(this.image, mouseX, mouseY, 50, 50);

     }
}
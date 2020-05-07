class BaseClass {
    constructor(x, y, height, r, g, b) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, 5, height, options);
        this.width = width;
        this.height = height;
        this.r = r;
        this.g = g;
        this.b = b;
        World.add(world, this.body);
    }
    display() {
        var pos =this.body.position;
        rectMode(CENTER);
        fill(rgb(this.r, this.g, this.b));
        rect(pos.x, pos.y, 5, this.height);
    }
}
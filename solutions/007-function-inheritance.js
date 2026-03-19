function Shape(name) {
	this.name = name;
}

Shape.prototype.draw = function() {
    console.log(`Drawing today ${this.name}`);
};

function Rectangle(name, width, height) {
	Shape.call(this, name);
	this.width = width;
	this.height = height;
}


Rectangle.prototype = Object.create(Shape.prototype);

const rect = new Rectangle('My Rectangle', 10, 5);
console.log(rect.name); // Output: My Rectangle
rect.draw();
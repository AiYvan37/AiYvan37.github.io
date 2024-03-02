class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("A square is a geometric figure with four equal sides and four right angles.");
    }

    length() {
        console.log("Length of all sides of the square:", 4 * this.a);
    }

    square() {
        console.log("Area of the square:", this.a ** 2);
    }

    info() {
        console.log("Information about the square:");
        console.log("Side length:", this.a);
        this.length();
        this.square();
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("A rectangle is a geometric figure with four right angles, where opposite sides are equal.");
    }

    length() {
        console.log("Length of the rectangle:", 2 * (this.a + this.b));
    }

    square() {
        console.log("Area of the rectangle:", this.a * this.b);
    }

    info() {
        console.log("Information about the rectangle:");
        console.log("Length:", this.a);
        console.log("Width:", this.b);
        this.length();
        this.square();
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A rhombus is a geometric figure with all sides of equal length and opposite angles equal.");
    }

    info() {
        console.log("Information about the rhombus:");
        console.log("Side length:", this.a);
        console.log("Obtuse angle:", this.alpha, "degrees");
        console.log("Acute angle:", this.beta, "degrees");
    }
}

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A parallelogram is a quadrilateral with opposite sides equal and parallel.");
    }

    info() {
        console.log("Information about the parallelogram:");
        console.log("Length:", this.a);
        console.log("Width:", this.b);
        console.log("Obtuse angle:", this.alpha, "degrees");
        console.log("Acute angle:", this.beta, "degrees");
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const square = new Square(8);
const rectangle = new Rectangle(4, 6);
const rhombus = new Rhombus(5, 70, 110);
const parallelogram = new Parallelogram(4, 8, 52, 128);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();
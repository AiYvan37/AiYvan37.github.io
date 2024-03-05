class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("A square is a geometric figure with four equal sides and four right angles.");
    }

    length() {
        return 4 * this.a;
    }

    square() {
        return this.a * this.a;
    }

    info() {
        console.log("Square characteristics:");
        console.log("Side length:", this.a);
        console.log("Sum of side lengths:", this.length());
        console.log("Area:", this.square());
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this._b = b;
    }

    static help() {
        console.log("A rectangle is a geometric figure with four sides, opposite sides of which are parallel and equal, and all angles are right angles.");
    }

    get b() {
        return this._b;
    }

    set b(value) {
        this._b = value;
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b;
    }

    info() {
        console.log("Rectangle characteristics:");
        console.log("Length:", this.a);
        console.log("Width:", this.b);
        console.log("Sum of side lengths:", this.length());
        console.log("Area:", this.square());
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this._alpha = alpha;
        this._beta = beta;
    }

    static help() {
        console.log("A rhombus is a geometric figure with four equal sides and all angles are equal.");
    }

    get alpha() {
        return this._alpha;
    }

    set alpha(value) {
        this._alpha = value;
    }

    get beta() {
        return this._beta;
    }

    set beta(value) {
        this._beta = value;
    }

    length() {
        return 4 * this.a;
    }

    square() {
        return this.a * this.a * Math.sin(this.alpha * Math.PI / 180);
    }

    info() {
        console.log("Rhombus characteristics:");
        console.log("Side length:", this.a);
        console.log("Acute angle:", this.alpha, "degrees");
        console.log("Obtuse angle:", this.beta, "degrees");
        console.log("Sum of side lengths:", this.length());
        console.log("Area:", this.square());
    }
}

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("A parallelogram is a geometric figure with opposite sides parallel to each other, and all angles are parallel.");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b * Math.sin(this.alpha * Math.PI / 180);
    }

    info() {
        console.log("Parallelogram characteristics:");
        console.log("Length:", this.a);
        console.log("Width:", this.b);
        console.log("Acute angle:", this.alpha, "degrees");
        console.log("Obtuse angle:", this.beta, "degrees");
        console.log("Sum of side lengths:", this.length());
        console.log("Area:", this.square());
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const squareObj = new Square(8);
squareObj.info();

const rectangleObj = new Rectangle(4, 6);
rectangleObj.info();

const rhombusObj = new Rhombus(5, 70, 110);
rhombusObj.info();

const parallelogramObj = new Parallelogram(4, 8, 52, 128);
parallelogramObj.info();
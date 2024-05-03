// variant = (10 % 2) + 1 = 1

function TriangleArea(base = 5, height = 4) {
    const area = 0.5 * base * height;
    console.log("Area of a triangle:", area);
    return area;
}

TriangleArea(3, 6);

TriangleArea();

function Jet(color, avgSpeed, maxAltitude, brand, destination) {
    this.color = color;
    this.avgSpeed = avgSpeed;
    this.maxAltitude = maxAltitude;
    this.brand = brand;
    this.destination = destination;
}

Jet.AssignPilot = function(jetObj, name, experience, hasChildren) {
    jetObj.pilot = {
        name: name,
        experience: experience,
        hasChildren: hasChildren
    };
}

let myJet = new Jet("Blue", 800, 35000, "Boeing", "New York");
Jet.AssignPilot(myJet, "Ivan Ostapyshyn", 20, false);
console.log(myJet);


class EquilateralTriangle {
    constructor(equalSide) {
        this.equalSide = equalSide;
    }

    get EqualSide() {
        return this.equalSide;
    }
}

class IsoscelesTriangle extends EquilateralTriangle {
    constructor(equalSide, base) {
        super(equalSide);
        this.base = base;
    }

    static calculateArea(a, b) {
        return (b / 4) * Math.sqrt(4 * Math.pow(a, 2) - Math.pow(b, 2));
    }
}

const equiTriangle = new EquilateralTriangle(5);
console.log("Side of an equilateral triangle:", equiTriangle.EqualSide);

const isosTriangle = new IsoscelesTriangle(5, 8);
console.log("Side of an isosceles triangle:", isosTriangle.EqualSide);
console.log("Base of an isosceles triangle:", isosTriangle.base);
console.log("Area of an isosceles triangle:", IsoscelesTriangle.calculateArea(5, 8));


function AddGenerator(number) {
    return function(additional) {
        return number + additional;
    };
}

const addFive = AddGenerator(5);
console.log(addFive(3));

const addTen = AddGenerator(10);
console.log(addTen(7));
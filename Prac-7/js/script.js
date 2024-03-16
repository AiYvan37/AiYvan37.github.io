function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

const defaultTriangle = Triangular();
const triangle1 = Triangular(6, 8, 10);
const triangle2 = Triangular(9, 12, 15);
const triangle3 = Triangular(12, 16, 20);

console.log(defaultTriangle);
console.log(triangle1);
console.log(triangle2);
console.log(triangle3);

function PiMultiplier(number) {
    return function() {
        return Math.PI * number;
    };
}

const multiplyBy2 = PiMultiplier(2);
const multiplyByTwoThirds = PiMultiplier(2/3);
const divideBy2 = PiMultiplier(1/2);

console.log(multiplyBy2());
console.log(multiplyByTwoThirds());
console.log(divideBy2());

function Painter(color) {
    return function(object) {
        if (object.hasOwnProperty('type')) {
            console.log(`Color: ${color}, Type: ${object.type}`);
            object.color = color;
        } else {
            console.log(`Color: ${color}, No 'type' property occurred!`)
        }
    };
}

const object1 = { maxSpeed: 280, type: 'Sportcar', color: 'magenta' };
const object2 = { type: 'Truck', avgSpeed: 90, loadCapacity: 2400 };
const object3 = { maxSpeed: 180, color: 'purple', isCar: true };

Painter('blue')(object1);
Painter('red')(object2);
Painter('yellow')(object3);
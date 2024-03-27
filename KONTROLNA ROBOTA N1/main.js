// N4
function TriangleArea(h = 4, a = 5){
    let S = 0.5 * a * h;
    return S;
}
function TriangleArea2(h = 6, a = 3){
    let S = 0.5 * a * h;
    return S;
}
console.log('zvd4', TriangleArea(), TriangleArea2())

// N4
class Jet{
    constructor(color, avgSpeed, maxAltitude, brand, pointOfdestination){
        this.color = color || 'white';
        this.avgSpeed = avgSpeed || 1500;
        this.maxAltitude = maxAltitude || 8000;
        this.brand = brand || "Ryanair";
        this.pointOfdestination = pointOfdestination || "Warsaw";
        this.pilot = null;
    }
}
Jet.prototype.AssignPilot = function(name, yearOfexperience, hasChildren){
    this.pilot = {
        name : name || "Mykhailo Moroz",
        yearOfexperience : yearOfexperience || "0",
        hasChildren : hasChildren|| "10 Kyivan childrens"
    };
}

let jetInfo = new Jet();
jetInfo.AssignPilot();
console.log('zvd5', jetInfo)


// N5
class EquilateralTriangle{
    constructor(equalSide){
        this.equalSide = equalSide || '5';
    }
    get getEqualSide() {
        return this.equalSide;
    }
}
let triangle = new EquilateralTriangle();
console.log(new EquilateralTriangle());
console.log(triangle.getEqualSide, '- getter');

class IsoscelesTriangle extends EquilateralTriangle {
    constructor(equalSide, base) {
        super(equalSide);
        this.base = base || 4;
    }

    static triangleSquare(equalSide, base) {
        let S = (base / 4) * Math.sqrt(4 * equalSide ** 2 - base ** 2);
        return S;
    }
}
let isoTriangle = new IsoscelesTriangle();

console.log(isoTriangle, IsoscelesTriangle.triangleSquare(isoTriangle.equalSide, isoTriangle.base));

// N6
function AddGenerator(number){
    return function(additionNumber){
        return number + additionNumber;
    };
}
let addEight = AddGenerator(8);
console.log(addEight(14));
let addThirteen = AddGenerator(13);
console.log(addThirteen(10));
let addOne = AddGenerator(1);
console.log(addOne(99));

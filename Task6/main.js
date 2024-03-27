class Square{
    constructor(a){
        this.a = a;
    }
    static help(){
        console.log(`Квадрат - це геометрична фігура яка нагадує квадратну форму круга 
        Він переважно має 4 лінії 
        У квадрата є брат і звуть його паралелепіпед`);
    }
    length(){
        this.perimeter = 4 * this.a;
        console.log(this.perimeter);
        return this.perimeter;
    }
    square(){
        this.area = this.a ** 2;
        console.log(this.area);
        return this.area;
    }
    info(){
        console.log(`
        ${this.a} - Довжина всіх сторін
        Всі сторони мають по 90 градусів
        ${this.length()} - Периметр квадрата
        ${this.square()} - Площа квадрата`);
    }
}

class Rectangle extends Square{
    constructor(a, b){
        super(a);
        this.b = b;
    }
    get getA() {
        return this.a;
    }

    get getB() {
        return this.b;
    }

    set setA(a) {
        this.a = a;
    }

    set setB(b) {
        this.b = b;
    }

    static help(){
        console.log(`Прямокутник - це геометрична фігура яка нагадує квадратну форму круга 
        Він переважно має 4 лінії 
        У прямокутника є брат і звуть його квадрат`);
    }
    length(){
        this.perimeter = 2*(this.a+this.b);
        console.log(this.perimeter);
        return this.perimeter;
    }
    square(){
        this.area = this.a * this.b;
        console.log(this.area);
        return this.area;
    }
    info(){
        console.log(`
        ${this.a} і ${this.b} - Довжини сторін
        Всі сторони мають по 90 градусів
        ${this.length()} - Периметр прямокутника
        ${this.square()} - Площа прямокутника`);
    }
}

class Rhombus extends Square{
    constructor(a, alpha, beta){
        super(a);
        this.alpha = alpha || 120;
        this.beta = beta || 60;
    }
    static help(){
        console.log(`Ромб - це квадрат, якщо подивитись під іншим ракурсом 
        Він переважно має 4 лінії 
        У ромба є крута особливість, з нього роблять повітряні змії`);
    }
    length(){
        this.perimeter = this.a * 4;
        console.log(this.perimeter);
        return this.perimeter;
    }
    square(){
        this.area = (this.a ** 2) * Math.sin(this.alpha) ;
        console.log(this.area);
        return this.area;
    }
    info(){
        console.log(`
        ${this.a} - Довжина сторін
        Сторони мають по ${this.alpha} і ${this.beta} градусів
        ${this.length()} - Периметр ромба
        ${this.square()} - Площа ромба`);
    }
}

class Parallelogram extends Rhombus{
    constructor(a, b, alpha, beta){
        super(a, alpha, beta);
        this.b = b || 6;
    }
    static help(){
        console.log(`Паралелограм - це тіпа квадрат + ромб + прямокутник 
        Переважно паралелограм не має відношення до грам
        Паралелограми дуже добрі хижаки і можуть піймати собі здобич запросто`);
    }
    length(){
        this.perimeter = 2 * (this.a + this.b);
        console.log(this.perimeter);
        return this.perimeter;
    }
    square(){
        this.area = (this.a * this.b) * (Math.sin(this.alpha)) ;
        console.log(this.area);
        return this.area;
    }
    info(){
        console.log(`
        ${this.a} і ${this.b} - Довжини сторін
        Сторони мають по ${this.alpha} і ${this.beta} градусів
        ${this.length()} - Периметр паралелограма
        ${this.square()} - Площа паралелограма`);
    }
}


let squareBro = new Square(4);
let rectangleBro = new Rectangle(4, 6);
let rhombusBro = new Rhombus (4, 120, 60);
let parallelogramBro = new Parallelogram (4, 6, 120, 60)

console.log(rectangleBro.getA);
console.log(rectangleBro.getB);
console.log(rectangleBro.setA = 4);
console.log(rectangleBro.setB = 5);

squareBro.info();
rectangleBro.info();
rhombusBro.info();
parallelogramBro.info();

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();
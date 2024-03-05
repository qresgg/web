let car1 = new Object();
car1.color = "black";
car1.maxSpeed = "70";
car1.driver = new Object();
car1.tuning = true;
car1.numberOfAccidents = "0";

car1.driver.name = "Петелюк Віталій";
car1.driver.category = "C";
car1.driver.personalLimitations = "No driving at night";
car1.drive = function(){
    console.log("I am not driving at night");
}

car1.drive()

let driver = {
    name: "Петелюк Віталій",
    category: "B",
    personalLimitations: null
}

let car2 = {
    color: "pink",
    maxSpeed: "50",
    driver: driver,
    tuning: false,
    numberOfAccidents: 2,
    drive: function(){
        console.log("I can drive anytime");
    }
}

car2.drive()

function Truck(color, weight, avgSpeed, brand, model) {
        this.color = color;
        this.weight = weight;
        this.avgSpeed = avgSpeed;
        this.brand = brand;
        this.model = model;
        this.trip = function() {
            if (this.driver == undefined){
                console.log("No driver assigned");
            } else {
                console.log(`Driver ${this.driver.name}, ${(this.driver.nightDriving) ? "drives at night" : "does not drive at night"} and has ${this.driver.experience} years of experience.`)
            }
// Мені сподобався тернарний оператор пана Івана, і я його використав в своєму прикладі (Код пишу в Аеропорті Будапешту, якщо ви це читаєте, то я уже в Канаді)
        };
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name,
        nightDriving,
        experience
    };
}

let firstTruck = new Truck("pink", 10, 100, "DAF", "XF");
let secondTruck = new Truck("black", 20, 140, "SCANIA", "R400");
firstTruck.trip();
secondTruck.trip();

firstTruck.AssignDriver("Chunk", true, 3);
secondTruck.AssignDriver("Petro", false, 10);

console.log(firstTruck);
console.log(secondTruck);
firstTruck.trip();
secondTruck.trip();
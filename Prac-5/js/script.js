var car1 = new Object();
car1.color = "red";
car1.maxSpeed = 200;
car1.driver = {
    name: "Ostapyshyn Ivan",
    category: "C",
    "personal limitations": "No driving at night"
};
car1.tuning = true;
car1["number of accidents"] = 0;

var car2 = {
    color: "blue",
    maxSpeed: 180,
    driver: {
        name: "Ostapyshyn Ivan",
        category: "B",
        "personal limitations": null
        },
    tuning: false,
    "number of accidents": 2
    };

car1.drive = function () {
    console.log("I am not driving at night");
};

car2.drive = function () {
    console.log("I can drive anytime");
};

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}
    
Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

Truck.prototype.trip = function () {
    if (!this.driver) {
        console.log("No driver assigned");
    } 
    else {
        var message = "Driver " + this.driver.name;
        message += this.driver.nightDriving ? " drives at night" : " does not drive at night";
        message += " and has " + this.driver.experience + " years of experience";
        console.log(message);
    }
};

var truck1 = new Truck("yellow", 5000, 80, "Volvo", "FH4 460");
truck1.AssignDriver("Ostapyshyn Ivan", true, 10);
truck1.trip();

var truck2 = new Truck("green", 6000, 70, "Volvo", "FH4 460");
truck2.AssignDriver("Ostapyshyn Ivan", false, 5);
truck2.trip();
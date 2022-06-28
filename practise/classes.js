var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
        this.color = color;
    }
    Vehicle.prototype.drive = function () {
        console.log('Inside Drive Method in Vehicle Class');
    };
    //protected methods can be called inside the same class and also can be accessed from the child classes
    //but cant be accessed on a object
    Vehicle.prototype.honk = function () {
        console.log('Honk Method');
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(fueltype, color) {
        var _this = _super.call(this, color) || this;
        _this.fueltype = fueltype;
        _this.fueltype = fueltype;
        return _this;
    }
    //overriding the parent method
    Car.prototype.drive = function () {
        console.log('Inside Car Class');
    };
    Car.prototype.printMethod = function () {
        console.log('Private Print Method');
    };
    Car.prototype.print = function () {
        this.printMethod();
        this.honk(); //accessing the parent protected class.
        console.log("Car color is ".concat(this.color, " and fueltype is ").concat(this.fueltype));
    };
    return Car;
}(Vehicle));
var vehicle = new Vehicle('red');
vehicle.drive();
var car = new Car('diesel', 'brown');
car.drive();
// car.printMethod() : Error, Can't access the private methods on the objects.
// only accessed inside the class from other methods
car.print();
//default behaviour : all methods inside a class are public.

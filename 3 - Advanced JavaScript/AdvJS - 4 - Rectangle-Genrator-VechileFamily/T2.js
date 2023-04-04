function Vehicle(speed, color){
    if(typeof arguments[0]!="number" && typeof arguments[1]!="number"){
        console.log(typeof arguments[0])
        throw("Incorrect input ")
    }
    Object.defineProperty(this, "speed",{value: speed,writable:false,configurable:false,  enumerable: false})
    Object.defineProperty(this, "color",{value: color,writable:false,configurable:false,  enumerable: false})

    var star=function(){ return false}.bind(this)
    var stop=function(){ return true}.bind(this)
}
Vehicle.prototype.turnLeft=function(){}
Vehicle.prototype.turnRight=function(){}
Vehicle.prototype.goForward=function(speed,accel) {}
Vehicle.prototype.goBackward=function(speed,accel) {}
/////////////////////////////////////////////////////////////////////////////////
function Bicycle(speed, color){
    Vehicle.call(this, speed, color);
    this.ringbell=function(){}
}
Bicycle.prototype=Object.create(Vehicle.prototype);
Bicycle.prototype.constructor=Bicycle;
/////////////////////////////////////////////////////////////////////////////////
function MotorVehicle(speed, color, sizeOfEngine, licenseplate){ 
    Vehicle.call(this, speed, color)
    if(typeof arguments[2]!="string")   throw("incorrect Engine size") 
    Object.defineProperty(this, "sizeOfEngine",{value:sizeOfEngine,writable:false,configurable:false,enumerable: false})
    Object.defineProperty(this, "licenseplate",{value: licenseplate,writable:false,configurable:false,  enumerable: false});
}
MotorVehicle.prototype=Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor=MotorVehicle;
MotorVehicle.prototype.getSizeOfEngine=function(){return sizeOfEngine}
MotorVehicle.prototype.getLicensePlate=function(){return licenseplate}
/////////////////////////////////////////////////////////////////////////////////
function DumpTruck(){
    MotorVehicle.call(this, sizeOfEngine, licensePlate);
    Object.defineProperty(this,"loadcapacity",{value:loadcapacity ,writable:false, configurable:false, enumerable:false})
    Object.defineProperty(this,"NumWheels",{value:NumWheels ,writable:false, configurable:false, enumerable:false})
    Object.defineProperty(this,"weight", {value:weight ,writable:false, configurable:false, enumerable:false})
}
DumpTruck.prototype=Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor=DumpTruck;
Car.prototype.lowerload()=function(){}
Car.prototype.raiseload()=function(){}
/////////////////////////////////////////////////////////////////////////////////
function Car(speed, color, NumofDoors, NumWheels, weight){  
    MotorVehicle.call(this, sizeOfEngine, licensePlate);
    Object.defineProperty(this, "NumofDoors",{value: NumofDoors,writable:false,configurable:false,  enumerable:false})
    Object.defineProperty(this, "NumWheels",{value: NumWheels,writable:false,configurable:false, enumerable:false})
    Object.defineProperty(this, "weight",{value: weight,writable:false,configurable:false,  enumerable:false})
    var switchOnAirCon=function(){}
}
Car.prototype=Object.create(MotorVehicle.prototype);
Car.prototype.constructor=Car;
Car.prototype.switchOnAirCon=function(){}
Car.prototype.getNumOfDoors =function(){}



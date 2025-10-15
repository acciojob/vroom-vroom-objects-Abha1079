// Complete the js code
function Car(make, model) {
        
	    this.make = make,
		this.model = model
}
Car.prototype.getMakeModel = function () {
	return `${this.make}${this.model}`
}

SportsCar.prototype = Car.prototype

function SportsCar (make, model, topSpeed) {

	 
	this.topSpeed = topSpeed
	
	
}

SportsCar.prototype.topSpeed = function(){
	return `${this.topSpeed }`
}
 

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

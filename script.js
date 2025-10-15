// Complete the js code
function Car(make, model) {
	this.make = make,
		this.model = model0
    getMakeModel(){
		 console.log(`${Car.make}${Car.model}`)
	}
}

function SportsCar(make, model, topSpeed) {
	super(this.make,this.model)
	this.topSpeed = topSpeed
	getTopSpeed(){
		return this.topSpeed
	}
	
}

 SportsCar.prototype = Car.prototype 

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

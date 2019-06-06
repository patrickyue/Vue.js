class Car {
	engine: string;
	constructor(engine: string) {
		this.engine = engine;
	}
	start() {
		alert("Engine started: " + this.engine);
	}
	stop() {
		alert("Engine stopped: " + this.engine);
	}
}
// function start(){}
// function stop(){}
window.onload = function() {
	var car = new Car("V8");
	car.start();
	car.stop();
};

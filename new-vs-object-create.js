function Person (name, age) {
	this._name = "Pesho";
	this._age = age;
}

Person.prototype.sayHi = function sayHi() {
	console.log("Hi I'm " + this._name + ", Age: " + this._age);
}

var person = new Person();
var p2 = Object.create(Person.prototype);
console.log(person._name);


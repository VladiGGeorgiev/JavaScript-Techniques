function Person (name, age) {
	this._name = "Pesho";
	this._age = age;
}

Person.prototype.sayHi = function sayHi() {
	console.log("Hi I'm " + this._name + ", Age: " + this._age);
}

var person = new Person();
var person2 = Object.create(Person.prototype);

console.log(person._name); // Pesho
console.log(person2._name); // undefined

console.log(person instanceof Person); // true
console.log(person2 instanceof Person); // true
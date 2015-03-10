Function.prototype.new = function () {
	function functor() { return constructor.apply(this, args) }
	var args = Array.prototype.slice.call(arguments);
	functor.prototype = this.prototype;
	var constructor = this;
	return new functor;
}

function Person(name, age) {
	this._name = name;
	this._age = age;
}

var p = Person.new("Pesho", 13);
console.log(p);
Function.prototype.new = function () {
	function functor() { return constructor.apply(this, args) }
	var args = Array.prototype.slice.call(arguments);
	functor.prototype = this.prototype;
	var constructor = this;
	return new functor;
}

function Person(name, age) {
	if (!(this instanceof arguments.callee)) {
		return arguments.callee.new.apply(arguments.callee, arguments);
	};

	this._name = name;
	this._age = age;
}

var p = Person("Pesho", 13);
console.log(p);
var Student = (function() {
	function Student(name, age) {
		if(!(this instanceof arguments.callee)) {
			return arguments.callee(arguments);
		}

		this._name = name;
		this._age = age;
	}

	Student.prototype.introduce = function introduce() {
		return 'I\'m ' + this._name + ' age: ' + this._age;
	}

	return Student;
}());

var st = new Student('Pesho', 3);
var st2 = new Student('Minka', 10);
Object.prototype.extend = function (properties) {
	var hasOwnProperty = Object.hasOwnProperty;
	var object = Object.create(this);
	for (var property in properties) {
		if (hasOwnProperty.call(properties, property) || 
			typeof object[property] === 'undefined') {
			object[property] = properties[property];
		};
	}

	return object;
}

var person = {
	init: function (name, age) {
		this._name = name;
		this._age = age;
		return this;
	}
}

var student = person.extend({
	init: function (name, age, grade) {
		person.init.call(this, name, age);
		this._grade = grade;
		return this;
	}
});

var st = Object.create(student);
st.init('Pesho', 13, 2);
var st2 = Object.create(student).init('Gosho', 15, 3);
console.log(st);
console.log(st2);
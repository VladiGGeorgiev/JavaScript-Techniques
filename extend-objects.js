function extend(target) {
	if (!arguments[1]) {
		return;
	};

	var args = Array.prototype.splice.call(arguments, 1);

	args.forEach(function (item, index) {
		for (var prop in item) {
			if (!target[prop] && item.hasOwnProperty(prop)) {
				target[prop] = item[prop];
			};
		}
	})
}

function Person(name) {
	this._name = name;
}

function Dog(name) {
	this._name = name;
}

var speaker = {
	speak: function () {
		return this._name + " is speaking.";
	}
}

var mover = {
	walk: function () {
		return this._name + " is walking.";
	},
	run: function () {
		return this._name + " is running.";
	},
}

extend(Person.prototype, speaker, mover);
extend(Dog.prototype, mover);

var dog = new Dog("Pesho");
console.log(dog.walk());
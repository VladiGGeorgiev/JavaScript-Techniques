var inherit = function (child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;

  return child.prototype;
}

function Person(name) {
  this.name = name;
}

Person.prototype = (function () {
    function introduce() {
      return this.name;
    }

    return {
      introduce: introduce
    }
}());

function Student(name, grade) {
  Person.call(this, name);
  this.grade = grade;
}

Student.prototype = (function (parent) {
	var proto = inherit(Student, parent);

  	proto.introduce = function () {
    	return parent.prototype.introduce.call(this) + "Grade: " + this.grade;
  	}

  	return proto;
}(Person));

var st = new Student("Pesho", 4);
console.log(st.introduce());
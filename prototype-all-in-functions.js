Object.prototype.extends = function (parent) {
  if (!Object.create) {
    Object.prototype.create = function (proto) {
      function F() {};
      F.prototype = proto;
      return new F;
    };
  };
  
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
}

function Person (name) {
	this.name = name;
}

function Student(name, age) {
	Person.call(this, name);
	this.age = age;
}

Student.extends(Person);

// Student.prototype.introduce = function () {
// 		console.log("Name: " + this.name + ", Age: " + this.age);
// 	}

Student.prototype = {
	introduce: function () {
		console.log("Name: " + this.name + ", Age: " + this.age);
	}
};

var student = new Student("Minka", 21);
student.introduce();

console.log(student instanceof Student);
console.log(student instanceof Person);
var name = function(){}.name;
console.log((function(){}).name);
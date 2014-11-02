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

var Person = (function () {
  function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  function _hiddenFunction() {
    return this._firstName;
  }

  Person.prototype = {
    introduce: function introduce() {
      _hiddenFunction.call(this);
      return "Name: " + this._firstName + " " + this._lastName;
    }
  };

  return Person;  
}());

var Student = (function () {
  function Student(firstName, lastName, grade) {
    //Person.call(this, firstName, lastName);
    Person(firstName, lastName);
    this._grade = grade;
  } 

  // Student.prototype = Person.prototype; - WRONG!
  // Student.prototype = new Person(); - unexpected behaviour
  // Student.prototype = Object.create(Person.prototype); - supported in newest browsers
  Student.extends(Person);

  Student.prototype.introduce = function () {
    return Person.prototype.introduce.call(this) + ", Grade: " + this._grade;
  };

  return Student;
}());

var pesho = new Student("Peter", "Manov", 4);

function Animal(name) {
  this.name = name;
}

console.log(pesho.introduce());
console.log(pesho instanceof Person);
console.log(pesho instanceof Student);
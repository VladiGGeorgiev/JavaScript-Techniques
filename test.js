function Person(name, age) {
  if (!(this instanceof arguments.callee)) {
    return new arguments.callee(name, age);
  }
  this._name = name;
  this._age = age;
}

var p = Person("Pesho", 12);
console.log(p);
var Person = {
	firstName: "Person",
	lastName: "Person last name",
	sayHello: function personSayHello() {
		return "I'm " + this.firstName + " " + this.lastName;
	}
}

var pesho = Object.create(Person, {
	firstName: { value: "Peter" } 
});

console.log(pesho.sayHello());
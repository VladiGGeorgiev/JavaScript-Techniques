var a = {
	a: "asd",
	test2: function(argument) {
		console.log(this);
	}
}

function test(argument) {
	var testtt = a.test2;
	testtt();
}

new test()


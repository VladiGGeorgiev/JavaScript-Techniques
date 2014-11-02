var array = [1, 2, 3, 23, 12];
array.forEach(function (item, index) {
	console.log(index, item);
})

for (var i = 0; i < array.length; i += 1) {
	var item = array[i];
	console.log(i, item);
}
num = 0;
console.log(num)

function createPromise(value) {
	return new Promise(function(resolve,reject) {
		resolve(30);
	});
}
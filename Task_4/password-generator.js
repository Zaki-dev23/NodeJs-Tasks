var passwordGenerate = require('generate-password')



var password = passwordGenerate.generate({
	length: 10,
	numbers: true
});

// 'uEyMTw32v9'
console.log(password);
var fs = require("fs")
//Create File.txt
var createStream = fs.createWriteStream("welcome.txt"); //create file nemed welcome.txt in local
createStream.end();
//write in File.txt
var writeStream = fs.createWriteStream("welcome.txt")
writeStream.write('Hello Node')
writeStream.end()
//Read in File.txt
function readData(err, data) {
    console.log(data);
}

fs.readFile('welcome.txt', 'utf8', readData);

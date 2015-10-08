// Required
var os = require('os');
var ifaces = os.networkInterfaces();

var validIPs = [];

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    // Skip internal IPs
    if ('IPv4' !== iface.family || iface.internal !== false) {
      return;
    }
    // This interface has multiple ipv4 addresses
    if (alias >= 1) {
      validIPs.push(iface.address);
    } else {
      validIPs.push(iface.address);
    }
      
    validIPs.push("127.0.0.1");
  });
});

console.log(validIPs);

var a = 1;
var b = "Hello, world!";
var c = 1.234;
var d = null;

// Printing vars to console
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Function test1, returning calculation of the input x & y
function test1(x, y) {
	return (x + y) * (x - y);
}

// Calling test1 & printing result to console
console.log(test1(2, 3));

// Function test2, returning calculation of the input x & y
var test2 = function(x, y) {
	return (x + y) / (x - y);
}

// Calling test2 & printing result to console
console.log(test2(2, 3));

// 
var test3 = function(x) {
	return (x * x) + 2;
}

// Print input squared by 2 then add 2
console.log("Result Exercise 5: " + test3(8));

var arrayEvenNum = [];

// Create list of 60 even numbers
for(var num = 0; num < 60; num++)
    if(num%2 == 0)
        arrayEvenNum.push(num);

// Print list of numbers
console.log("Even Numbers, Exercise 6: " + arrayEvenNum);

// Printing list with call to Exercise 5 function
console.log("Result Exercise 7");
for(var index = 0; index < arrayEvenNum.length; index++)
    console.log(test3(arrayEvenNum[index]));

// Create object var 'car' with structure make, model that returns string make, model
var car = {
	make: "Skoda",
	model: "Octavia"
};

// Printing to console the make and model from the object 'car'
console.log("The car is a " + car.make + " " + car.model + ".");

// Create object var 'van' with structure make, model plus internal function full_name that returns string make, model
var van = {
	make: "Ford",
	model: "Transit",
	full_name: function() {
		return this.make + " " + this.model;
	}
};

// Printing to console with call to function 'full_name' inside object van
console.log("The van is a " + van.full_name() + 	".");

// Defining array var 'numbers'
var numbers = [1,2,3,4];

// Loop & print the count multipled by itself to the length of the 'numbers' array
for (var i = 0; i < numbers.length; i++) {
	console.log(i * i);
}

// Create object 'connection' with structure ip, port & a function to change port
var connection = {
    ip_address: "127.0.0.1",
    port: "8000",
    change_port: function(x){
        this.port = x;
    },
    connection: function(ip,port){
        this.ip_address = ip;
        this.port = port;
    },
    randomip: function(){
        return validIPs[Math.floor(Math.random() * (validIPs.length - 1 + 1)) + 1];
    },
    randomPort: function(){
        return Math.floor(Math.random() * (65536 - 1024 + 1)) + 1024;
    }
};

// Printing connection
console.log("Connection Print 1: IP = " + connection.ip_address + " Port = " + connection.port);

connection.change_port(9000);

// Printing connection
console.log("Connection Print 2: IP = " + connection.ip_address + " Port = " + connection.port);

var connections = [];

for(var j = 0; j < 100; j++)
    connections.push(new connection.connection(connection.randomip(),connection.randomPort()));

console.log(connections);

// If 1 less then 2, then print world is OK else world is not :)
if (1 < 2) {
	console.log("The world is OK.");
} else {
	console.log("The world is not OK.");
}
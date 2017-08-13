function HashTable() {
	this.table = new Array(237);
	this.simpleHash = simpleHash;
	this.betterHash = betterHash;
	this.showDistro = showDistro;
	this.put = put;	
}

function simpleHash(data) {
	// sum the ASCII value of the letters in the key
	var total = 0;
	for (var i = 0; i < data.length; ++i) {
		total += data.charCodeAt(i);
  	}

  	return total % this.table.length;
}

function betterHash(string) {
	// sum the ASCII values of the characters of a string, then multiply the resulting total by a prime constant
	const H = 37;
	var total = 0;
	
	for (var i = 0; i < string.length; ++i) {
		total += H * total + string.charCodeAt(i);
  	}
   	
   	total = total % this.table.length;
   	if (total < 0) {
   		total += this.table.length - 1;
   	}
   	return parseInt(total);
}

function put(data) {
	var index = this.betterHash(data);

	this.table[index] = data;
}

function showDistro() {
	for (var i = 0; i < this.table.length; ++i) {
    	if (this.table[i] != undefined) {
        	console.log(i + ": " + this.table[i]);
      	}
   	}
}



var names = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hash_table = new HashTable();

for (var i = 0; i < names.length; ++i) {
	hash_table.put(names[i]);
}

hash_table.showDistro();

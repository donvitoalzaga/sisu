function HashTable() {
    this.table = new Array(237);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
    this.buildChains = buildChains;
}

function simpleHash(data) {
    // Sum the ASCII value of the letters in the key
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }

    return total % this.table.length;
}

function betterHash(string) {
    // Sum the ASCII values of the characters of a string, then multiply the resulting total by a prime constant
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

    // Hashes the key and then attempts to store the data in the first cell of the chain at the hashed position
    // If that cell already has data in it, the function searches for the first open cell and stores the data in that cell

    var index = this.betterHash(data);
    var chain = 0;

    if (this.table[index][chain] == undefined) {
        this.table[index][chain] = data;
        ++chain;
    } else {
        while (this.table[index][chain] != undefined) {
            ++chain;
        }
        this.table[index][chain] = data;
    }
}

function get(key) {

    // starts out by hashing the key to get the position of the key in the hash table. Then the function searches the
    // cells until it finds the key it is looking for. When it finds the correct key, it returns the data from the
    // adjacent cell to the key’s cell. If the key is not found, the function returns undefined.

    var index = this.betterHash(key);
    var chain = 0;

    if (this.table[index][chain] = key) {
        return this.table[index][chain + 1];
        index += 2;
    } else {
        while (this.table[index][chain] != key) {
            index += 2;
        }
        return this.table[index][chain + 1];
    }

    return undefined;
}

function buildChains() {
    for (var i = 0; i < this.table.length; ++i) {
        this.table[i] = new Array();
    }
}

function showDistro() {
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i][0] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}


var names = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hash_table = new HashTable();
hash_table.buildChains();

for (var i = 0; i < names.length; ++i) {
    hash_table.put(names[i]);
}

hash_table.showDistro();

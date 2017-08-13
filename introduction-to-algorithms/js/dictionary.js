function Dictionary() {
	this.datastore = new Array();
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.show = show;
	this.count = count;
	this.clear = clear;
}

function add(key, value) {
	this.datastore[key] = value;
}

function find(key) {
	return this.datastore[key];
}

function remove(key) {
	delete this.datastore[key]
}

function show() {
	for (var key of Object.keys(this.datastore).sort()) {
		console.log(key + ': ' + this.datastore[key])
	}
}

function count() {
	var counter = 0;
	for (var key of Object.keys(this.datastore)) {
		counter++;
	}
	return counter;
}

function clear() {
	for (var key of Object.keys(this.datastore)) {
		delete this.datastore[key]
	}
}

var phonebook = new Dictionary();

phonebook.add("Raymond","123");
phonebook.add("David", "345");
phonebook.add("Cynthia", "456");
phonebook.add("Mike", "723");
phonebook.add("Jennifer", "987");
phonebook.add("Danny", "012");
phonebook.add("Jonathan", "666");

phonebook.show();
phonebook.clear();

console.log("Number of entries: " + phonebook.count());

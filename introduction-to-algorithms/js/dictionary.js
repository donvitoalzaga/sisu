

function Dictionary() {
	this.datastore = new Array();
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.show = show
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
	for (var key of Object.keys(this.datastore)) {
		console.log(key + ': ' + this.datastore[key])
	}
}

var phonebook = new Dictionary();

phonebook.add('Mike', '123');
phonebook.add("David", "345");
phonebook.add("Cynthia", "456");
console.log("David's extension: " + phonebook.find("David"));
phonebook.remove("David");

phonebook.show();

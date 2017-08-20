function Queue() {
  this.datastore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.empty = empty;
  this.showList = showList;
}

function enqueue(data) {
  this.datastore.push(data);
}

function dequeue() {
  return this.datastore.shift();
}

function front() {
  return this.datastore[0];
}

function back() {
  return this.datastore[this.datastore.length - 1];
}

function showList() {
  var queue = "";
  for (var i = 0; i < this.datastore.length; ++i) {
    queue += this.datastore[i] + "\n";
  }
  return queue;
}

function empty() {
  if (this.datastore.length == 0) {
    return true;
  } else {
    return false;
  }
}

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.showList());
q.dequeue();
console.log(q.showList());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

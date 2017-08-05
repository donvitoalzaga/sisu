function Graph(v) {
	this.root = undefined;
	this.vertices = v;
	this.edges = 0;
	this.edgeTo = [];
	this.adj = [];
	this.addEdge = addEdge;
	this.bfs = bfs;
	this.marked = [];
	this.pathTo = pathTo;
	this.hasPathTo = hasPathTo;

	for (var i = 0; i < this.vertices; ++i) {
		this.adj[i] = [];
	}

	for (var i = 0; i < this.vertices; ++i) {
		this.marked[i] = false;
	}
}

function addEdge(v,w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

function bfs(s) {
	if (this.root === undefined) {
		this.root = s;		
	}
	
	var queue = [];
	this.marked[s] = true;
	queue.push(s); //add to back of queue
	while (queue.length > 0) {
		var v = queue.shift(); // remove from front of queue
		if (v != undefined) {
			console.log("Visited vertex: " + v);
      	}
      	for (var w of this.adj[v]) {
      		if (!this.marked[w]) {
      			this.edgeTo[w] = v;
      			this.marked[w] = true;
            	queue.push(w);
      		}
      	}
	}
}

function hasPathTo(v) {
	return this.marked[v];
}

function pathTo(v) {
	var source = 0;
	
	if (!this.hasPathTo(v)) {
		return undefined;
	}
	
	var path = [];
	
	for (var i = v; i != source; i = this.edgeTo[i]) {
		path.push(i);
   	}
   	
   	path.push(this.root);
   	return path;
}

g = new Graph(8);

g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,7);
g.addEdge(3,5);
g.addEdge(5,7);

g.bfs(0);

var vertex = 7;
var paths = g.pathTo(vertex);

console.log('shortest path from edge ' + g.root + ' to ' + vertex + ' is path: ' + paths.reverse().join('-'))

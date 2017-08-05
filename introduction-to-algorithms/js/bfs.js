// The search starts at a first vertex and tries to visit vertices as close to the first vertex as possible.
// In essence, this search moves through a graph layer by layer, first examining layers closer to the first
// vertex and then moving down to the layers farthest away from the starting vertex.
// Breadth-first search uses a queue abstraction instead of an array abstraction for storing visited vertices.
// The algorithm works as follows: Find an unvisited vertex that is adjacent to the current vertex,
// add it to the list of visited vertices, and add it to the queue.
// Take the next vertex, v, from the graph and add it to the list of visited vertices.
// Add all unmarked vertices that are are adjacent to v and add them to the queue.

function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.edgeTo = [];
	this.adj = [];

	for (var i = 0; i < this.vertices; ++i) {
		this.adj[i] = [];
	}

	this.addEdge = addEdge;
	this.bfs = bfs;
	this.marked = [];

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

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.bfs(0);

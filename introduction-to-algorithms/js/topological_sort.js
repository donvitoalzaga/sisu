// The topological sort algorithm is broken up into two functions. The first function, topSort(),
// sets up the sorting process and calls a helper function, topSortHelper(), and then displays the
// sorted list of vertices.

// The major work is done in the recursive function topSortHelper(). This function marks the current
// vertex as visited and then recursively visits each adjacent vertex in the current vertex’s adjacency list,
// marking them as visited. Finally, the current vertex is pushed onto a stack.

function Graph(v) {
	this.vertices = v;
	this.vertexList = [];
	this.edges = 0;
	this.adj = [];
	this.addEdge = addEdge;
	this.marked = [];
	this.topSortHelper = topSortHelper;
	this.topSort = topSort;

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

function topSortHelper(v, visited, stack) {
	visited[v] = true;


	for (var w of this.adj[v]) {
		if (!visited[w]) {
			this.topSortHelper(w, visited, stack);
		}
	}

	stack.push(v);
}

function topSort() {
	var stack = [];
	var visited = [];

	for (var i = 0; i < this.vertices; i++) {
		visited[i] = false;
	}

	for (var i = 0; i < this.vertices; i++) {
		if (visited[i] == false) {
			this.topSortHelper(i, visited, stack);
	  }
	}

	for (var i = 0; i < stack.length; i++) {
	  	if (stack[i] != undefined && stack[i] != false) {
	    	console.log(this.vertexList[stack[i]]);
		}
	}
}

g = new Graph(6);

g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);

g.vertexList = ["CS1", "CS2", "Data Structures", "Assembly Language", "Operating Systems", "Algorithms"];
g.topSort();

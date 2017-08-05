// Visit a vertex that has not already been visited, mark it as having been visited,
// then recursively visit the other unvisited vertices that are in the original vertex’s adjacency list

function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];

	for (var i = 0; i < this.vertices; ++i) {
		this.adj[i] = [];
	}

	this.addEdge = addEdge;
	this.dfs = dfs;
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

function dfs(v) {
   this.marked[v] = true;
   
   if (this.adj[v] != undefined) {
      console.log("Visited vertex: " + v);
   }

   for (var w of this.adj[v]) {
      if (!this.marked[w]) {
	    this.dfs(w);
	  }
   }
}

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.dfs(0);

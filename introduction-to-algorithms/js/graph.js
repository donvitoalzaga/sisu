function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];

  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
  }

  this.addEdge = addEdge;
  this.toString = toString;
}

function Vertex() {
  this.label = label;
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);

console.log(g.adj)

for (var i = 0; i < g.vertices; ++i) {
  console.log('Vertex: ' + i);
  for (var j = 0; j < g.vertices; ++j) {
	if (g.adj[i][j] != undefined) {
	  console.log(g.adj[i][j]);
    }
  }
}

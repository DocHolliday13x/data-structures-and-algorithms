const { Graph, Vertex } = require('./index.js');

describe('Graph', () => {

  it('should create a new graph', () => {
    const graph = new Graph();

    expect(graph).toBeDefined();
  });

  it('should add a node to the graph', () => {
    const graph = new Graph();
    const vertex = new Vertex('A');

    graph.addVertex(vertex);

    expect(graph.size()).toEqual(1);
    expect(graph.getNodes()).toEqual([vertex]);
  });

  it('should add an edge to the graph', () => {
    const graph = new Graph();
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');

    graph.addVertex(vertexA);
    graph.addVertex(vertexB);
    graph.addDirectedEdge(vertexA, vertexB);

    expect(graph.size()).toEqual(2);
    expect(graph.getNodes()).toEqual([vertexA, vertexB]);
    expect(graph.getNeighbors(vertexA)).toEqual([{ vertex: vertexB, weight: 0 }]);
  });

  it('should return the graph', () => {
    const graph = new Graph();
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');

    graph.addVertex(vertexA);
    graph.addVertex(vertexB);
    graph.addDirectedEdge(vertexA, vertexB);

    expect(graph.toString()).toEqual('A -> B');
  });

  it('should return the size of the graph', () => {
    const graph = new Graph();
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');

    graph.addVertex(vertexA);
    graph.addVertex(vertexB);

    expect(graph.size()).toEqual(2);
  });

  it('should return the neighbors of a node', () => {
    const graph = new Graph();
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');

    graph.addVertex(vertexA);
    graph.addVertex(vertexB);
    graph.addDirectedEdge(vertexA, vertexB);

    expect(graph.getNeighbors(vertexA)).toEqual([{ vertex: vertexB, weight: 0 }]);
  });

  it('should return the nodes of the graph', () => {
    const graph = new Graph();
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');

    graph.addVertex(vertexA);
    graph.addVertex(vertexB);

    expect(graph.getNodes()).toEqual([vertexA, vertexB]);
  });

  it('should add a new vertex to the graph', () => {
    const graph = new Graph();
    const vertex = new Vertex('A');

    graph.addVertex(vertex);

    expect(graph.size()).toEqual(1);
    expect(graph.getNodes()).toEqual([vertex]);
  });

  it('should return null if the graph is empty', () => {
    const graph = new Graph();

    expect(graph.getNodes()).toEqual(null);
  });

  it('should return "true" if the trip is possible', () => {
    const graph = new Graph();

    const a = new Vertex('A');
    const b = new Vertex('B');
    const c = new Vertex('C');
    const d = new Vertex('D');
    const e = new Vertex('E');
    const f = new Vertex('F');

    graph.addVertex(a);
    graph.addVertex(b);
    graph.addVertex(c);
    graph.addVertex(d);
    graph.addVertex(e);
    graph.addVertex(f);

    graph.addDirectedEdge(a, b);
    graph.addDirectedEdge(b, c);
    graph.addDirectedEdge(c, d);
    graph.addDirectedEdge(d, e);
    graph.addDirectedEdge(e, f);

    const arr = ['A', 'B', 'C', 'D', 'E', 'F'];

    expect(graph.businessTrip(graph, arr)).toEqual([true, 0]);
  });

});

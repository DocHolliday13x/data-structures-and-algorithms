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

});











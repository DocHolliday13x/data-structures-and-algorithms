`use strict`;

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    // adjacency list
    /*
      vertex: [edge, edge, edge]
    */
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('Invalid Vertex');
    }

    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      throw new Error('Invalid Vertex');
    }

    return [...this._adjacencyList.get(vertex)];
  }

  getNodes() {
    return this._adjacencyList.entries();
  }

  breadthFirst(node) {
    const queue = [];
    const visited = new Set();

    queue.push(node);
    visited.add(node);

    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        if (visited.has(neighborNode)) {
          continue;
        } else {
          visited.add(neighborNode);
        }

        queue.push(neighborNode);
      }
    }

    return visited;
  }

  businessTrip(graph, arr) {
    let cost = 0;
    let isPossible = false;

    for (let i = 0; i < arr.length - 1; i++) {
      const neighbors = graph.getNeighbors(arr[i]);

      for (let neighbor of neighbors) {
        if (neighbor.vertex.value === arr[i + 1]) {
          cost += neighbor.weight;
          isPossible = true;
          break;
        }
      }

      if (!isPossible) {
        cost = 0;
        isPossible = false;
        break;
      }
    }

    return [isPossible, cost];
  }
}

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
graph.addDirectedEdge(a, c);
graph.addDirectedEdge(b, c);
graph.addDirectedEdge(b, d);
graph.addDirectedEdge(c, e);
graph.addDirectedEdge(d, e);
graph.addDirectedEdge(d, f);
graph.addDirectedEdge(e, f);

console.log(graph.breadthFirst(a));
console.log(graph.breadthFirst(b));
console.log(graph.breadthFirst(c));
console.log(graph.breadthFirst(d));
console.log(graph.breadthFirst(e));
console.log(graph.breadthFirst(f));



module.exports = Graph;










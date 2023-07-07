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

}



module.exports = {
  Vertex,
  Edge,
  Graph,
};










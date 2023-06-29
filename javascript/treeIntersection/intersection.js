`use strict`;

const { HashTable } = require('../hashtable/hashtable.js');


function treeIntersection(tree1, tree2) {
  const hashMap1 = new HashTable();
  const hashMap2 = new HashTable();
  const result = [];

  function traverse(tree, hashMap){
    let current = tree.root;
    if(!current) return;
    function _walk(node){
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      hashMap.add(node.value, node.value);
    }
    _walk(current);
  }
  traverse(tree1, hashMap1);
  traverse(tree2, hashMap2);

  let keys = hashMap1.keys();

  for(let i = 0; i < keys.length; i++){
    if(hashMap2.contains(keys[i])){
      result.push(keys[i]);
    }
  }
  return result;
}

module.exports = treeIntersection;







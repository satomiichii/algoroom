function Node(name, children = []) {
  this.name = name;
  this.children = children;
}

function depthFirstSearch(node, array) {
  array.push(node.name);
  for (let child of node.children) {
    depthFirstSearch(child, array);
  }
  return array;
}

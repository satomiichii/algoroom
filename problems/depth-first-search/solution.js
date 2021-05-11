const depthFirst = (array = [], node) => {
  array.push(node.name);
  if (node.children !== []) {
    for (let child in node.children) {
      depthFirst(node);
    }
  }
  return array;
};

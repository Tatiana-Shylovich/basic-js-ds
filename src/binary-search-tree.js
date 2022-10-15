const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addNode(this.treeRoot, data);

    function addNode(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else if (data > node.data) {
        node.right = addNode(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.treeRoot, data);

    function searchNode(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (data < node.data) {
        return searchNode(node.left, data);
      } else if (data > node.data) {
        return searchNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.treeRoot, data);

    function findNode(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      if (data < node.data) {
        return findNode(node.left, data);
      } else if (data > node.data) {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.right && !node.left) return null;
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        let leftMax = node.left;
        while (leftMax.right) {
          leftMax = leftMax.right;
        }
        node.data = leftMax.data;
        node.left = removeNode(node.left, leftMax.data);
        return node;
      }
    }
  }

  min() {
    if (!this.treeRoot) return null;
    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.treeRoot) return null;
    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};
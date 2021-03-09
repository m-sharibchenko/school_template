const Node = require('./node.js')

class BinarySearchTree {
  #head

  constructor() {
    this.#head = null
  }

  root() {
    return this.#head.data
  }

  insertTo(point, node) {
    const currentNode = point
    if (node.key < currentNode.key) {
      if (currentNode.right != null) {
        this.insertTo(currentNode.right, node)
      } else {
        currentNode.right = node
      }
    } else {
      if (currentNode.left != null) {
        this.insertTo(currentNode.left, node)
      } currentNode.left = node
    }
  }

  insert(key, value) {
    const node = new Node(key, value)
    if (!this.#head) {
      this.#head = node
    } else {
      const currentNode = this.#head
      this.insertTo(currentNode, node)
    }
    return this
  }

  searchNode(node, key) {
    const currentNode = node
    if (key < currentNode.key) {
      return this.searchNode(currentNode.right, key)
    }
    if (currentNode.key === key) {
      return currentNode.data
    }

    return this.searchNode(currentNode.left, key)
  }

  search(key) {
    const currentNode = this.#head
    if (currentNode.key === key) {
      return currentNode.data
    }
    return this.searchNode(currentNode, key)
  }

  deleteNode(node, key) {
    const currentNode = node
    if (key < currentNode.key) {
      if (currentNode.right.key === key) {
        currentNode.right = null
        return this
      }

      return this.deleteNode(currentNode.right, key)
    }
    if (currentNode.left.key === key) {
      currentNode.left = null
      return this
    }

    return this.deleteNode(currentNode.left, key)
  }

  delete(key) {
    let currentNode = this.#head
    if (currentNode.key === key) {
      currentNode = null
      return this
    }
    return this.deleteNode(currentNode, key)
  }

  findValue(currentNode, value) {
    if (currentNode.data === value) {
      return true
    }
    let resultRight
    let resultLeft
    if (currentNode.right) {
      resultRight = this.findValue(currentNode.right, value)
    }
    if (currentNode.left) {
      resultLeft = this.findValue(currentNode.left, value)
    }

    return (resultLeft || resultRight)
  }

  contains(value) {
    const currentNode = this.#head
    return this.findValue(currentNode, value)
  }
}

const bst = new BinarySearchTree()

bst.insert(2, 'two').insert(1, 'one').insert(3, 'three')

bst.root()

bst.delete(1).delete(3)

bst.root()

bst.insert(1, 'one')
bst.insert(3, 'three')

bst.search(1)
bst.contains('three')

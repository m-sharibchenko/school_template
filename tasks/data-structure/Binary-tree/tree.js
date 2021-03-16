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
      if (currentNode.left != null) {
        this.insertTo(currentNode.left, node)
      } else {
        currentNode.left = node
      }
    } else {
      if (currentNode.right != null) {
        this.insertTo(currentNode.right, node)
      } currentNode.right = node
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
      return this.searchNode(currentNode.left, key)
    }
    if (currentNode.key === key) {
      return currentNode.data
    }

    return this.searchNode(currentNode.right, key)
  }

  search(key) {
    const currentNode = this.#head
    if (currentNode.key === key) {
      return currentNode.data
    }
    return this.searchNode(currentNode, key)
  }

  static findMinKey(node) {
    let currentNode = node
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode
  }

  delete(key) {
    let currentNode = this.#head
    let parentNode
    while (currentNode && currentNode.key !== key) {
      parentNode = currentNode
      if (key < currentNode.key) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    if (!currentNode.left && !currentNode.right) {
      if (parentNode.left && parentNode.left.key === key) {
        parentNode.left = null
      } else {
        parentNode.right = null
      }
    } else if (currentNode.left && currentNode.right) {
      const nodeToReplace = BinarySearchTree.findMinKey(currentNode.right)

      this.delete(nodeToReplace.key)

      currentNode.key = nodeToReplace.key
      currentNode.data = nodeToReplace.data
    } else {
      let childNode
      if (currentNode.left) {
        childNode = currentNode.left
      } else {
        childNode = currentNode.right
      }

      if (!parentNode) {
        this.#head = childNode
      } else if (parentNode.left.key === key) {
        parentNode.left = childNode
      } else {
        parentNode.right = childNode
      }
    }

    return this
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
    if (!resultRight && currentNode.left) {
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

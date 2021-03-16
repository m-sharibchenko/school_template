const Node = require('./node.js')

class DoubleLinkedList {
  #head

  constructor() {
    this.#head = null
  }

  insert(value) {
    const node = new Node(value)
    if (!this.#head) {
      this.#head = node
    } else {
      let currentNode = this.#head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
      node.previous = currentNode
    }
    return this
  }

  tail() {
    let currentNode = this.#head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  head() {
    return this.#head
  }

  traverse(order = true) {
    let currentNode = this.#head
    const array = [currentNode.data]
    while (currentNode.next) {
      currentNode = currentNode.next
      array.push(currentNode.data)
    }
    let str
    if (order) {
      str = array.join(' -> ')
    } else {
      str = array.reverse().join(' -> ')
    } return str
  }

  getNode(value) {
    let currentNode = this.#head
    while (currentNode) {
      if (currentNode.data === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }

  addAfter(value, parent) {
    const node = new Node(value)
    const parentNode = parent
    if (parentNode.next) {
      node.next = parentNode.next
      parentNode.next.previous = node
      node.previous = parentNode
      parentNode.next = node
    } else {
      parentNode.next = node
      node.previous = parentNode
    }
    return this
  }

  isExist(value) {
    let currentNode = this.#head
    while (currentNode) {
      if (currentNode.data === value) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }

  delete(value) {
    let currentNode = this.#head
    if (this.isExist(value)) {
      while (currentNode) {
        const nextNode = currentNode.next
        const previousNode = currentNode.previous
        switch (true) {
          case currentNode.data === value && currentNode.previous === null:
            this.#head = currentNode.next
            nextNode.previous = null
            return this
          case currentNode.data === value && currentNode.next === null:
            previousNode.next = null
            return this
          case currentNode.data === value:
            previousNode.next = currentNode.next
            nextNode.previous = currentNode.previous
            return this
          default: currentNode = currentNode.next
        }
      }
    } return null
  }
}

const dll = new DoubleLinkedList()
dll.insert('two').insert('one').insert('three').insert('four')
dll.traverse()
dll.traverse(true)
dll.traverse(false)

dll.head()
dll.tail()

const parentNode = dll.getNode('one')
dll.addAfter('ten', parentNode)
dll.traverse()

dll.delete('one').delete('three')
dll.traverse()

dll.isExist('ten')
dll.isExist('one')

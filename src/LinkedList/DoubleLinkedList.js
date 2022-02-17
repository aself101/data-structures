

class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.previous = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = new Node('head')
  }
  find(item) {
    let currentNode = this.head
    while (currentNode.element.toString() !== item.toString()) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  insert(newElement, item) {
    let newNode = new Node(newElement)
    let current = this.find(item)
    newNode.next = current.next
    newNode.previous = current
    current.next = newNode
    return this
  }
  display() {
    let currentNode = this.head
    while(currentNode.next !== null) {
      console.log(currentNode.next.element)
      currentNode = currentNode.next
    }
    return this
  }
  displayReverse() {
    let currentNode = this.head
    currentNode = this.findLast()
    while (currentNode.previous !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.previous
    }
    return this
  }
  findLast() {
    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  remove(item) {
    let currentNode = this.find(item)
    if (currentNode.next !== null) {
      currentNode.previous.next = currentNode.next
      currentNode.next.previous = currentNode.previous
      currentNode.next = null
      currentNode.previous = null
    }
    return this
  }
  advance(item, n) {
    let count = 0
    let currentNode = this.find(item)
    console.log(currentNode)
    while (currentNode.next !== null && count <= n) {
      currentNode.previous = currentNode
      console.log('After setting currentNode previous to currentNode')
      console.log(currentNode)
      currentNode = currentNode.next
      console.log('After setting currentNode to currentNode.next')
      console.log(currentNode)
      count += 1
    }
  }
}

module.exports = DoubleLinkedList


/* END */

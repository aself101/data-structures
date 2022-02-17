/*
  Node: Linked List node
  @Constructor
    element: stores the node's data
    next: stores the link to the next node
*/
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head')
    this.find = this.find.bind(this)
    this.insert = this.insert.bind(this)
    this.remove = this.remove.bind(this)
    this.display = this.display.bind(this)
    this.findPrevious = this.findPrevious.bind(this)
  }
  insert({ newItem, previousItem }) {
    let newNode = new Node(newItem)
    let current = this.find(previousItem)
    newNode.next = current.next
    current.next = newNode
    return this
  }
  find(item) {
    let currentNode = this.head
    while (currentNode.element.toString() !== item.toString()) currentNode = currentNode.next
    return currentNode
  }
  findPrevious(item) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.element.toString() !== item.toString()) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  remove(item) {
    let prevNode = this.findPrevious(item)
    if (prevNode.next !== null) prevNode.next = prevNode.next.next
    return this
  }
  display() {
    let current = this.head
    while (current.next !== null) {
      console.log(current.next)
      current = current.next
    }
    return this
  }
}


module.exports = LinkedList


































/* END */

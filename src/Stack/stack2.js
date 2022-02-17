/*******************************************************************************
Stack Class: Basic stack data structure
*******************************************************************************/
const MAX_STACK_SIZE = 4200000000

class Stack {
  constructor() {
    this.items = []
  }
  /* Adds a new item to the stacktom  */
  push(item) {
    return this.items.push(item)
  }
  /* Returns the next item in the stack */
  pop() {
    if (this.isEmpty()) throw new Error('The stack is empty. Underflow.')
    return this.items.pop()
  }
  /* Returns the item on the top of the stack */
  top() {
    return this.items[this.size()]
  }
  /* Checks if the stack is empty */
  isEmpty() {
    return this.items.length === 0
  }
  /* Clears entire stack; all items removed */
  clear() {
    this.items = []
  }
  /* Returns the size of the stack */
  size() {
    return this.items.length - 1
  }
  /* Checks if the stack is full */
  full() {
    if (this.items.length >= MAX_STACK_SIZE) return true
    return false
  }
  /* Prints the stack */
  print() {
    return console.log(this.items.toString())
  }
  /* Deletes all items that match the value in stack */
  deleteAll(item) {
    return this.items.filter((n) => n !== item)
  }
  /* Reverses the stack */
  reverse() {
    return this.items.reverse()
  }
}

module.exports = Stack





































/* END */

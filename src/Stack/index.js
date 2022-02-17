/*******************************************************************************
Data Structures and Program Design in C++
Stack Implementation
*******************************************************************************/
const MAX_STACK_SIZE = 99999999

class Stack {
  #items; // Stack items
  #size; // Size of stack
  #max; // max size of stack
  constructor() {
    this.#items = []
    this.#size = 0
    this.#max = MAX_STACK_SIZE
    this.push = this.push.bind(this)
  }
  push(item) {
    this.#items[this.#size++] = item
    return this
  }
  pop() {
    if (this.#size <= 0) {
      console.error('No entries in the stack exist. Returning...')
      return this
    }
    this.#size--
    return this.#items.pop()
  }
  delete(item) {
    let index = this.#items.indexOf(item)
    if (index < 0) {
      console.error(`Item: ${item} does not exist. Returning 0...`)
      return 0
    }
    this.#items.splice(index,1)
    this.#size--
    return 1
  }
  deleteAll(items) {
    for (let item of items) {
      let complete = this.delete(item)
      if (!complete) continue
    }
    return 1
  }
  size() {
    return this.#size
  }
  empty() {
    return this.#size === 0
  }
  top() {
    return this.#items[this.#items.length-1]
  }
  popTop() {
    let top = this.top()
    this.delete(top)
    return top
  }
  list() {
    for (let item of this.#items) console.log(item)
  }
  toString() {
    return this.#items.toString()
  }
  clear() {
    while (this.#items.length > 0) {
      this.#items.pop()
      this.#size--
    }
    return this
  }
  copyStack() {
    return [ ...this.#items ]
  }
  full() {
    return this.#size === this.#max
  }
}


module.exports = Stack

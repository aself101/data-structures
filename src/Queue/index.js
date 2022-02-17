/*******************************************************************************
Data Structures and Program Design in C++
Stack Implementation
*******************************************************************************/
const MAX_QUEUE_SIZE = 99999999

class Queue {
  #items;
  #size;
  #max;
  constructor() {
    this.#items = []
    this.#size = 0
    this.#max = MAX_QUEUE_SIZE
  }
  append(item) {
    if (this.#size >= this.#max) {
      console.error(`Queue is full. Returning 0...`)
      return 0
    }
    this.#items[this.#size++] = item
    return this
  }
  serve() {
    if (this.#size <= 0) {
      console.error(`Queue is empty. Returning 0...`)
      return 0
    }
    this.#size--
    return this.#items.shift()
  }
  retrieve() {
    if (this.#size <= 0) {
      console.error(`Queue is empty. Returning 0...`)
      return 0
    }
    return this.#items[0]
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
  tail() {
    return this.#items[this.#items.length-1]
  }
  list() {
    for (let item of this.#items) console.log(item)
    return this
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
  copyQueue() {
    return [ ...this.#items ]
  }
  full() {
    return this.#size === this.#max
  }
}


module.exports = Queue

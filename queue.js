/*******************************************************************************
Data Structures and Program Design in C++
Stack Implementation
*******************************************************************************/

class Queue {
  #items;
  #size;
  #max;
  constructor() {
    this.#items = []
    this.#size = 0
    this.#max = 1000000
  }
  append(item) {
    this.#items[this.#size++] = item
    return this
  }
  serve() {
    this.#size--
    return this.#items.splice(0,1)
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
  retrieve() {
    return this.#items[0]
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
  copyQueue() {
    return [ ...this.#items ]
  }
  full() {
    return this.#size === this.#max
  }
  serveAndRetrieve() {

  }
}


module.exports = Queue

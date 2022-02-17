/*******************************************************************************
List Abstract Data Type
1.19.22
*******************************************************************************/

class List {
  constructor() {
    this.datastore = [] // actual data store
    this.listSize = 0 // Size of list
    this.pos = 0 // Current position in list
    this.find = this.find.bind(this)
    this.clear = this.clear.bind(this)
    this.toString = this.toString.bind(this)
    this.getElement = this.getElement.bind(this)
    this.insert = this.insert.bind(this)
    this.append = this.append.bind(this)
    this.remove = this.remove.bind(this)
    this.front = this.front.bind(this)
    this.end = this.end.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    this.currentPos = this.currentPos.bind(this)
    this.moveTo = this.moveTo.bind(this)
    this.length = this.length.bind(this)
    this.contains = this.contains.bind(this)
  }
  find(element) {
    return this.datastore.indexOf(element)
  }
  clear() { // Clears all elements
    delete this.datastore
    this.datastore = []
    this.listSize = 0
    this.pos = 0
  }
  toString() { // Returns string rep of list
    return this.datastore
  }
  getElement() { // Returns element at current pos
    return this.datastore[this.pos]
  }
  insert({element, after}) { // Inserts a new element after existing one
    const insertPos = this.find(after)
    if (insertPos > -1) {
      this.datastore.splice(insertPos+1, 0, element)
      ++this.listSize
      return true
    }
    return false
  }
  append(element) { // Adds new element to end of list
    this.datastore[this.listSize++] = element
    return this
  }
  remove(element) { // Removes element from list
    const foundAt = this.find(element)
    if (foundAt > -1) {
      this.datastore.splice(foundAt,1)
      --this.listSize
      return true
    }
    return false
  }
  front() { // Sets current position to first element of list
    this.pos = 0
    return this
  }
  end() { // Sets current position to last element of list
    this.pos = this.listSize - 1
    return this
  }
  prev() { // Moves current position back one element
    if (this.pos > 0) --this.pos
    return this
  }
  next() { // moves current position forward one element
    if (this.pos < this.listSize - 1) ++this.pos
    return this
  }
  currentPos() { // Returns current position in list
    return this.pos
  }
  moveTo(pos) { // Moves the current position to specified position
    this.pos = pos
  }
  length() { // Returns length of list
    return this.listSize - 1
  }
  contains(element) { // Returns true if the list contain an element
    return this.datastore.includes(element)
  }
}

module.exports = List


/* END */

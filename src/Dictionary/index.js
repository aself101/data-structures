/*
  Dictionary Class
*/

class Dictionary {
  constructor() {
    this.datastore = new Array()
    this.add = this.add.bind(this)
    this.find = this.find.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
    this.toString = this.toString.bind(this)
    this.showAll = this.showAll.bind(this)
    this.keys = this.keys.bind(this)
    this.count = this.count.bind(this)
    this.clear = this.clear.bind(this)
  }
  add(key, value) {
    if (this.find(key)) throw new Error(`Key: ${key} already exists. Use update(), remove() or add() a new key`)
    this.datastore[key] = value
    return this
  }
  find(key) {
    return this.datastore[key]
  }
  update(key, value) {
    this.datastore[key] = value
    return this
  }
  remove(key) {
    delete this.datastore[key]
    return this
  }
  toString() {
    return this.datastore.toString()
  }
  showAll() {
    for (let key in this.datastore.sort()) {
      console.log(`${key} -> ${this.datastore[key]}`)
    }
  }
  keys() {
    return Object.keys(this.datastore)
  }
  count() {
    return Object.keys(this.datastore).length
  }
  clear() {
    this.datastore = new Array()
  }
}

module.exports = Dictionary


















/* END */

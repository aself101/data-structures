const Stack = require('./stack')



const main = () => {
  try {
    let s = new Stack()
    let alpha ='abcdefghijklmnopqrstuvwxyz'.split('')
    /* E2. Write a program that makes use of a stack to read in a single line of
    text and write out the characters in the line in reverse order. */
    for (let a of alpha) s.push(a)
    while (!s.empty()) console.log(s.pop())

    for (let a of alpha) s.push(a)

    let newStack = s.copyStack()
    console.log(newStack.toString() === s.toString())

    console.log(`Full?: ${s.full()}`)
    console.log(s.size())
    console.log('Pop top!')
    let top = s.popTop()
    console.log(top)
    console.log(s.size())
    console.log(s.toString())
    console.log('Deleting z, f, n, v, x, y')
    console.log(s.deleteAll(['z','f', 'n', 'v', 'x', 'y']))
    console.log(s.size())
    console.log(s.toString())
  } catch (e) {
    throw new Error(`main(): ${e}`)
  }
}


main()











/* END */

const Stack = require('./Stack')

const primeFactor = (n) => {
  const stack = new Stack()
  while (n % 2 === 0) {
    stack.push(2)
    n = Math.floor(n/2)
  }
  for (let i = 3; i < Math.floor(Math.sqrt(n)); i += 2) {
    while (n % i === 0) {
      stack.push(i)
      n = Math.floor(n/i)
    }
  }
  if (n > 2) stack.push(n)
  return stack
}

module.exports = {
  primeFactor
}

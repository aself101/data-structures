/*******************************************************************************

*******************************************************************************/
const readline = require('readline')
const { stdin: input, stdout: output } = require('process')
const rl = readline.createInterface({ input, output })

const Stack = require('./src/Stack')
const Queue = require('./src/Queue')



const main = () => {
  try {
    let s = new Stack()
    let q = new Queue()
    console.log('Enter random values: \n')
    rl.on('line', (input) => {
      if (input === 'P') rl.close()
      if (input === 'Q') rl.close()
      q.append(input)
      rl.resume()
    })

    rl.on('close', () => {
      console.log('Closing readline and list queue values...')
      console.log(q.list())
      rl.close()
      process.exit(1)
    })

    return 1
  } catch (e) {
    throw new Error(e)
  }
}

main()



/*
  ** STACK **
  let arr = [1,2,3,4,5,3,3,3,5]
  const stack = new Stack()

  for (let a of arr) {
    stack.push(a)
  }

  console.log(stack.size())
  console.log(stack.print())
  console.log(stack.pop())
  console.log(stack.print())
  console.log(stack.top())
  console.log(stack.deleteAll(3))

  console.log(primeFactor(2100))
  return;

  E2. Suppose that you are a financier and purchase 100 shares of stock in Company
  X in each of January, April, and September and sell 100 shares in each of June
  and November. The prices per share in these months were
  Determine the total amount of your capital gain or loss using (a) FIFO (first-
  in, first-out) accounting and (b) LIFO (last-in, first-out) accounting [that is,
  assuming that you keep your stock certificates in (a) a queue or (b) a stack].
  The 100 shares you still own at the end of the year do not enter the calculation.
  let shares = [
    { month: 'Jan', cost: 10, purchase: 1 },
    { month: 'Apr', cost: 30, purchase: 1 },
    { month: 'Jun', cost: 20, purchase: 0 },
    { month: 'Sep', cost: 50, purchase: 1 },
    { month: 'Nov', cost: 30, purchase: 0 },
  ]
  for (let share of shares) {
    let sharesOfStock = 100
    if (share.purchase) {
      q.append({ month: share.month, earnings: -(share.cost * sharesOfStock), sharesOfStock: sharesOfStock })
      s.push({ month: share.month, earnings: -(share.cost * sharesOfStock), sharesOfStock: sharesOfStock })
    } else {
      q.append({ month: share.month, earnings: (share.cost * sharesOfStock), sharesOfStock: -sharesOfStock })
      s.push({ month: share.month, earnings: (share.cost * sharesOfStock), sharesOfStock: -sharesOfStock })
    }
  }
  let stackTotal = 0
  let queueTotal = 0
  while (!s.empty()) {
    let share = s.pop()
    stackTotal += share.earnings
  }

  while (!q.empty()) {
    let share = q.serve()
    queueTotal += share.earnings
  }

  console.log(`Earnings with Stack: $${stackTotal}`)
  console.log(`Earnings with Queue: $${queueTotal}`)

  ** LINKED LIST **
  let cities = new LinkedList()
  cities.insert({ newItem: 'Conway', previousItem: 'head' })
  cities.insert({ newItem: 'Russelville', previousItem: 'Conway' })
  cities.insert({ newItem: 'Carlisle', previousItem: 'Russelville' })
  cities.insert({ newItem: 'Alma', previousItem: 'Carlisle' })
  cities.insert({ newItem: 44, previousItem: 'Alma' })
  cities.insert({ newItem: { name: 'Alex', sex: 'M' }, previousItem: 44 })
  cities.display()
  console.log('Removing object')
  cities.remove(44)
  cities.display()

  ** DICTIONARY **
  const dict = new Dictionary()
  dict.add('Bonnie', 'Mom')
  dict.add('Xavier', 'Son')
  dict.add('Alex', 'Dad')

  console.log(`Alex is ${dict.find('Alex')}`)
  console.log(`Bonnie is ${dict.find('Bonnie')}`)
  console.log(`Xavier is ${dict.find('Xavier')}`)
  console.log('\n Displaying!')
  dict.showAll()
  console.log('\n Keys!')
  console.log(dict.keys())

  dict.add('Alex', 'Dad')

  dict.remove('Alex')
  dict.update('Xavier','Little dude')
  dict.showAll()
  console.log(`Total entries: ${dict.count()}`)
  dict.clear()
  console.log(dict)

  ** LIST **
  const list = new List()
  list.append(1)
  list.append('Alex')
  list.append(3.14159)
  list.append('Bonnie')
  list.append('Xavier')
  list.append('Muni')
  list.append('Pupu')
  list.front()
  console.log(list.getElement())
  list.next()
  console.log(list.getElement())
  list.end()
  console.log(list.getElement())
  console.log(list.length())
  list.prev()
  console.log(list.getElement())
  list.front()
  console.log('Iterating through list')
  for (list.front(); list.currentPos() < list.length(); list.next()) console.log(list.getElement(), list.currentPos())
  //list.end()
  for (list.end(); list.currentPos() > 0; list.prev()) console.log(list.getElement(), list.currentPos())
*/

























/* END */

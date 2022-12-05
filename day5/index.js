// https://adventofcode.com/2022/day/5

const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.resolve(__dirname, "./input.txt")).toString()
const [start, procedure] = input.split("\n\n")

const stackLines = start.split("\n")
const ruler = stackLines.pop().replace(/\s/g, "")
const numOfStacks = parseInt(ruler[ruler.length - 1])

const stacks = Array.from(Array(numOfStacks), () => [])

stackLines.forEach(line => {
  for (let i = 0; i < numOfStacks; i++) {
    const crate = line[(i * 4) + 1]
    if (crate !== " ") stacks[i].push(crate)
  }
})

procedure.split("\n").forEach((line, li) => {
  const arr = line.split(" ")
  const qty = parseInt(arr[1])
  const from = parseInt(arr[3]) - 1
  const to = parseInt(arr[5]) - 1
  if (!stacks[from]) {
    console.log('fail:', li, from);
  } else {
    const removed = stacks[from].splice(0, qty)

    /* --- star 1 --- */
    // stacks[to].splice(0, 0, ...removed.reverse())

    /* --- star 2 --- */
    stacks[to].splice(0, 0, ...removed)
  }
})

console.log(stacks.map(el => el[0]).join(""))

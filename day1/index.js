// https://adventofcode.com/2022/day/1

const fs = require('fs')
const path = require('path')

const elves = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .split("\n\n")

const cals = []

elves.forEach(e => {
  const elf = e.split("\n").map(el => parseInt(el, 10))
  cals.push(elf.reduce((acc, val) => acc + val))
})

const sorted = cals.sort((a, b) => b - a)

console.log("star 1 result: ", sorted[0])
console.log("star 2 result: ", sorted.slice(0,3).reduce((acc, val) => acc + val))

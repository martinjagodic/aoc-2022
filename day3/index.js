// https://adventofcode.com/2022/day/3

const fs = require('fs')
const path = require('path')

const lines = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .split("\n")

function getPriority(char) {
  const charCode = char.charCodeAt(0)
  return char === char.toUpperCase() ? charCode - 64 + 26 : charCode - 96
}

/* --- star 1 --- */
let totalPriority1 = 0

lines.forEach(line => {
  const len = line.length
  const half = Math.ceil(len / 2)
  const comp1 = line.slice(0, half).split('')
  const comp2 = line.slice(half).split('')
  const commonChar = comp1.filter(element => comp2.includes(element))[0]
  
  const priority = getPriority(commonChar)
  totalPriority1 += priority
})

console.log('total priority 1: ', totalPriority1)


/* --- star 2 --- */
let totalPriority2 = 0
const groups = []
let gi = 0

lines.forEach((line, i) => {
  if (!groups[gi]) groups[gi] = []
  groups[gi].push(line)
  if ((i + 1) % 3 === 0) gi += 1
})

groups.forEach(group => {
  const mem1 = group[0].split('')
  const mem2 = group[1].split('')
  const mem3 = group[2].split('')
  const commonChars = mem1.filter(element => mem2.includes(element))
  const commonChar = commonChars.filter(element => mem3.includes(element))[0]
  
  const priority = getPriority(commonChar)
  totalPriority2 += priority
})

console.log('total priority 2: ', totalPriority2)

// https://adventofcode.com/2022/day/4  

const fs = require('fs')
const path = require('path')

const lines = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .split("\n")

/* --- star 1 --- */
let fullyContained = 0

/* --- star 2 --- */
let overlapping = 0

lines.forEach(line => {
  const arr = line.split(",")
  const elf1 = arr[0].split("-")
  const elf2 = arr[1].split("-")
  const elf1start = parseInt(elf1[0])
  const elf1end = parseInt(elf1[1])
  const elf2start = parseInt(elf2[0])
  const elf2end = parseInt(elf2[1])

  let isContained = false
  let isOverlapping = false

  if (
    (elf1start >= elf2start && elf1end <= elf2end) ||
    (elf2start >= elf1start && elf2end <= elf1end)
  ) {
    fullyContained += 1
    overlapping += 1
    isContained = true
    isOverlapping = true
  } else if (
    (elf1start >= elf2start && elf2end <= elf1end && elf2end >= elf1start) ||
    (elf2start >= elf1start && elf1end <= elf2end && elf1end >= elf2start)
  ) {
    overlapping += 1
    isOverlapping = true
  }
  console.log(elf1start, elf1end, elf2start, elf2end, isContained, isOverlapping);
})

/* --- star 1 --- */
console.log('fully contained assignments: ', fullyContained)

/* --- star 2 --- */
console.log('overlapping assignments: ', overlapping)

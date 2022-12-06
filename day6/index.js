// https://adventofcode.com/2022/day/6

const fs = require('fs')
const path = require('path')

const buffer = fs.readFileSync(path.resolve(__dirname, "./input.txt")).toString().split("")

/* --- star 1 --- */
let startOfPacketMarker = 0

for (let i = 3; i < buffer.length; i++) {
  const bufferCopy = [...buffer]
  const last4 = bufferCopy.splice(i - 3, 4)
  const hasDuplicates = last4.some((e, i, arr) => arr.indexOf(e) !== i)
  startOfPacketMarker = i + 1
  if (!hasDuplicates) break
}

console.log('start-of-package marker', startOfPacketMarker)


/* --- star 2 --- */
let startOfMessageMarker = 0

for (let i = 13; i < buffer.length; i++) {
  const bufferCopy = [...buffer]
  const last14 = bufferCopy.splice(i - 13, 14)
  const hasDuplicates = last14.some((e, i, arr) => arr.indexOf(e) !== i)
  startOfMessageMarker = i + 1
  if (!hasDuplicates) break
}

console.log('start-of-message marker', startOfMessageMarker)

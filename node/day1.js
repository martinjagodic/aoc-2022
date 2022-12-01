var fs = require('fs');

var elves = fs.readFileSync('../day1.txt').toString().split("\n\n");

function getElfCalories(e) {
  const elf = e.split("\n").map(el => parseInt(el, 10))
  return elf.reduce((acc, val) => acc + val)
}

const cals = []

elves.forEach(e => {
  const elf = e.split("\n").map(el => parseInt(el, 10))
  cals.push(elf.reduce((acc, val) => acc + val))
});

const sorted = cals.sort((a, b) => b - a)

// star 1
console.log(sorted[0]);

// star 2
console.log(sorted.slice(0,3).reduce((acc, val) => acc + val));

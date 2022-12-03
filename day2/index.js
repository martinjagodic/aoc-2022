// https://adventofcode.com/2022/day/2

const fs = require('fs')
const path = require('path')

const points = {
  rock: 1,
  paper: 2,
  scissors: 3,
  win: 6,
  draw: 3,
  lose: 0,
}

const lines = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .replaceAll("A", "rock").replaceAll("B", "paper").replaceAll("C", "scissors")
  
  /* --- star 1 --- */
  // .replaceAll("Y", "paper").replaceAll("X", "rock").replaceAll("Z", "scissors")

  /* --- star 2 --- */
  .replaceAll("Y", "draw").replaceAll("X", "lose").replaceAll("Z", "win")
  .split("\n")

let totalPoints = 0

lines.forEach(line => {
  const arr = line.split(" ")
  const hisMove = arr[0]
  const outcome = arr[1]

  /* --- star 1 --- */
  // let outcome = "lose"
  // if (hisMove === myMove) {
  //   outcome = "draw"
  // } else if (
  //   (hisMove === "rock" && myMove === "paper") ||
  //   (hisMove === "paper" && myMove === "scissors") ||
  //   (hisMove === "scissors" && myMove === "rock")
  // ) {
  //   outcome = "win"
  // }

  /* --- star 2 --- */
  let myMove = "rock"
  if (
    (outcome === "win" && hisMove === "rock") ||
    (outcome === "draw" && hisMove === "paper") ||
    (outcome === "lose" && hisMove === "scissors")
  ) {
    myMove = "paper"
  } else if (
    (outcome === "win" && hisMove === "paper") ||
    (outcome === "draw" && hisMove === "scissors") ||
    (outcome === "lose" && hisMove === "rock")
  ) {
    myMove = "scissors"
  }

  const result = points[myMove] + points[outcome]
  totalPoints += result
})

console.log("total points: ", totalPoints)
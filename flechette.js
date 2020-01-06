#!/usr/bin/env node

const inquirer = require('inquirer');

class Game {
  constructor(nbr, mode) {
    this.nbr = nbr;
    this.mode = mode;
  }
}

let questions = [
  {
    type: "input",
    name: "nbr",
    message: "Combien de joueurs ?"
  },
  {
    type: "input",
    name: "mode",
    message: "Quel mode de jeu ?"
  }
]

inquirer.prompt(questions).then(a => {
  console.table(a);
  const game = new Game(a.nbr, a.mode)
  console.table(game);
})

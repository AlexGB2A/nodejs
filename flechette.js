#!/usr/bin/env node

const inquirer = require('inquirer');

class Game {
  constructor(nbr, mode) {
    this.nbr = nbr;
    this.mode = mode;
  }
}

class Player {
  constructor(name) {
    this.name = name
    this.score = 0
  }
}

function world(nbp) {
  for (i = 0; i < nbp; i++) {
  let question = [
    {
      type: "input",
      name: "name",
      message: "nom du joueur ?"
    }
  ]
  inquirer.prompt(question).then(a => {
    console.log(nbp, a);
      players = new Player(a.name)
    })
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
  const game = new Game(a.nbr, a.mode)
  world(game.nbr)
})

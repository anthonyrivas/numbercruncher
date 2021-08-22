const inquirer = require('inquirer');

function Game() {
  this.num = 0;
  this.wins = 0;
  this.losses = 0;
}

Game.prototype.generateRandomNumber = function() {
  this.num = Math.floor(Math.random() * 5) + 1;
}

Game.prototype.start = function() {
  this.generateRandomNumber();
  this.getUserInput();
}

Game.prototype.reset = function() {
  this.generateRandomNumber();
  this.getUserInput();
}

Game.prototype.checkForVictory = function(userSelection) {
  if (userSelection === this.num) {
    this.wins++;
  } else {
    this.losses++;
  }
}

Game.prototype.displayCurrentScore = function() {
  console.log(`Wins: ${this.wins}\nLosses: ${this.losses}`)
}

Game.prototype.checkIfDone = function() {
  inquirer.prompt([
    {
      name: 'keepPlaying',
      type: 'confirm',
      message: 'Would you like to keep playing?'
    }
  ])
  .then(({keepPlaying}) => {
    if (keepPlaying) {
      this.reset()
    }
  })
}

Game.prototype.getUserInput = function() {
  inquirer.prompt([
    {
      name: 'userChoice',
      type: 'number',
      message: 'Please choose a whole number 1 - 5',
      validate: function(num) {
        if (num > 5 || num < 1 || parseInt(num) !== num) {
          return 'Number must be an integer from 1 - 5'
        }
        return true
      }
    }
  ])
  .then(({userChoice}) => {
    this.checkForVictory(userChoice);
    this.displayCurrentScore();
    this.checkIfDone();
  })
}


module.exports = Game;
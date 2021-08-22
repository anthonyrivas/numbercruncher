const inquirer = require('inquirer');
const Game = require('../constructors/Game');

// jest.mock('inquirer');

describe('Game', () => {
  describe('Initialization', () => {
    it('Should return an object containing a num property set to zero, when called with the new keyword', () => {
      const obj = new Game();
      expect('num' in obj).toEqual(true);
      expect(obj.num).toEqual(0);
    })
    it('Should return an object containing a wins property set to zero, when called with the new keyword', () => {
      const obj = new Game();
      expect('wins' in obj).toEqual(true);
      expect(obj.wins).toEqual(0);
    })
    it('Should return an object containing a losses property set to zero, when called with the new keyword', () => {
      const obj = new Game();
      expect('losses' in obj).toEqual(true);
      expect(obj.losses).toEqual(0);
    })
  })
  describe('generateRandomNumber', () => {
    it('Should update the num property to a random integer between 1 and 5', () => {
      const game = new Game();
      game.generateRandomNumber();

      expect(game.num).toBeGreaterThanOrEqual(1);
      expect(game.num).toBeLessThanOrEqual(5);
      expect(parseInt(game.num)).toEqual(game.num);
    })
  })
  describe('start', () => {
    it('should generate a random num 1-5', () => {
      const game = new Game();
      const mock = jest.spyOn(inquirer, 'prompt');
      mock.mockImplementation(() => {
        new Promise(function(resolve) {
          resolve({userChoice: 1});
        })
      });
      game.start();
      expect(game.num).toBeGreaterThanOrEqual(1);
      expect(game.num).toBeLessThanOrEqual(5);
      expect(parseInt(game.num)).toEqual(game.num);
    })
    it('should call inquirer prompt', () => {
      const game = new Game();
      const mock = jest.spyOn(inquirer, 'prompt');
      mock.mockImplementation(() => {
        new Promise(function(resolve) {
          resolve({userChoice: 1});
        })
      });
      game.start();
      expect(mock).toBeCalled()
    })
  })


      // inquirer.prompt.mockReturnValue(
      //   new Promise(function(resolve) {
      //     resolve({userChoice: 1});
      //   })
      // )










  describe('reset', () => {
    
  })
  describe('checkForVictory', () => {
    
  })
  describe('checkIfDone', () => {
    
  })
  describe('getUserInput', () => {
    
  })
})
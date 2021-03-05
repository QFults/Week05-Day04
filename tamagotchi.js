const { prompt } = require('inquirer')

class DigitalPal {
  constructor() {
    this.hungry = false
    this.sleepy = false
    this.bored = true
    this.age = 0
    this.outside = false
    this.houseCondition = 100
    this.feed = function () {
      if (this.hungry) {
        console.log('That was yummy!')
        this.hungry = false
        this.sleepy = true
      } else {
        console.log(`No thanks! I'm full.`)
      }
    }
    this.sleep = function () {
      if (this.sleepy) {
        console.log('Zzzzzzzz')
        this.sleepy = false
        this.bored = true
        this.increaseAge()
      } else {
        console.log(`No way! I'm not tired.`)
      }
    }
    this.play = function () {
      if (this.bored) {
        console.log(`Yay! Let's play!`)
        this.bored = false
        this.hungry = true
      } else {
        console.log('Not right now. Later?')
      }
    }
    this.increaseAge = function () {
      this.age++
      console.log(`Happy Birthday to me! I am ${this.age} years old!`)
    }
    this.bark = function () {
      console.log('Woof! Woof!')
    }
    this.goOutside = function () {
      if (this.outside) {
        console.log(`We're already outside though...`)
      } else {
        console.log('Yay! I love the outdoors!')
        this.outside = true
        this.bark()
      }
    }
    this.goInside = function () {
      if (this.outside) {
        console.log('Do we have to? Fine...')
        this.outside = false
      } else {
        console.log(`I'm already inside...`)
      }
    }
    this.meow = function () {
      console.log('Meow! Meow!')
    }
    this.destroyFurniture = function () {
      if (this.houseCondition > 0) {
        this.houseCondition -= 10
        console.log('MUAHAHAHA! TAKE THAT FURNITURE!')
        this.bored = false
        this.sleepy = true
      } else {
        console.log('The house has already been destroyed.')
      }
    }
    this.buyNewFurniture = function () {
      this.houseCondition += 50
      console.log('Are you sure about that?')
    }
  }
}

const dog = new DigitalPal()
const cat = new DigitalPal()

const dogPlay = () => {
  prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['Feed the dog', 'Let the dog sleep', 'Play with the dog', 'Bark the dog', 'Take the dog outside', 'Take the dog inside', 'Let the dog destroy the furniture', 'Buy new furniture', 'Play with a different pet', 'EXIT']
  })
    .then(({ action }) => {

      if (action === 'Play with a different pet') {
        mainMenu()
      } else {
        switch (action) {
          case 'Feed the dog':
            dog.feed()
            break
          case 'Let the dog sleep':
            dog.sleep()
            break
          case 'Play with the dog':
            dog.play()
            break
          case 'Bark the dog':
            dog.bark()
            break
          case 'Take the dog outside':
            dog.goOutside()
            break
          case 'Take the dog inside':
            dog.goInside()
            break
          case 'Let the dog destroy the furniture':
            dog.destroyFurniture()
            break
          case 'Buy new furniture':
            dog.buyNewFurniture()
            break
          case 'EXIT':
            process.exit()
            break
        }
        dogPlay()
      }
    })
}

const catPlay = () => {
  prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['Feed the cat', 'Let the cat sleep', 'Play with the cat', 'Meow the cat', 'Take the cat outside', 'Take the cat inside', 'Let the cat destroy the furniture', 'Buy new furniture', 'Play with a different pet', 'EXIT']
  })
    .then(({ action }) => {

      if (action === 'Play with a different pet') {
        mainMenu()
      } else {
        switch (action) {
          case 'Feed the cat':
            cat.feed()
            break
          case 'Let the cat sleep':
            cat.sleep()
            break
          case 'Play with the cat':
            cat.play()
            break
          case 'Meow the cat':
            cat.meow()
            break
          case 'Take the cat outside':
            cat.goOutside()
            break
          case 'Take the cat inside':
            cat.goInside()
            break
          case 'Let the cat destroy the furniture':
            cat.destroyFurniture()
            break
          case 'Buy new furniture':
            cat.buyNewFurniture()
            break
          case 'EXIT':
            process.exit()
            break
        }
        catPlay()
      }
    })
}

const mainMenu = () => {
  prompt({
    type: 'list',
    name: 'pet',
    message: 'Which pet would you like to play with?',
    choices: ['dog', 'cat', 'EXIT']
  })
    .then(({ pet }) => {
      switch (pet) {
        case 'dog':
          dogPlay()
          break
        case 'cat':
          catPlay()
          break
        case 'EXIT':
          process.exit()
          break
      }
    })
    .catch(err => console.log(err))
}

mainMenu()
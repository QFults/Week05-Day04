const { prompt } = require('inquirer')
const DigitalPal = require('./utils/DigitalPal')

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
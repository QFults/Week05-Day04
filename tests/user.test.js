const User = require('../utils/User.js')

test('printInfo should populate N/A for any missing properties', () => {
  const user = new User('John Doe', undefined, 'johndoe')
  expect(user.printInfo()).toBe(`
        Name: John Doe
        Email: N/A
        Username: johndoe
      `)
})

test('email should be valid', () => {
  expect(() => new User('John Doe', 'johndoe.com', 'johndoe')).toThrow(Error)
})
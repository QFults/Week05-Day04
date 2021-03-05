class User {
  constructor(name, email, username) {
    this.name = name ? name: 'N/A'

    if (email) {
      if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        this.email = email
      } else {
        throw new Error('email is not valid')
      }
    } else {
      this.email = 'N/A'
    }
    this.username = username ? username : 'N/A'
    this.printInfo = function () {
      return `
        Name: ${this.name}
        Email: ${this.email}
        Username: ${this.username}
      `
    }
  }
}

module.exports = User

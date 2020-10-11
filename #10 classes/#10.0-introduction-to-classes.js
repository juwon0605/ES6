class User {
  constructor(name) {
    this.username = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.username}.`);
  }
}

const user1 = new User("juwon1");
const user2 = new User("juwon2");

console.log(User.username);
console.log(user1.username, user2.username);
user1.sayHello();
user2.sayHello();

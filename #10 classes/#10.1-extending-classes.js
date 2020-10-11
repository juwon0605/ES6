class User {
  constructor(name, lastName, email, password) {
    this.username = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    // this.common = "common";
  }
  sayHello() {
    console.log(`Hello, my name is ${this.username}.`);
  }
  getProfile() {
    console.log(`${this.username} ${this.lastName} ${this.email}`);
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("Can't change password");
    }
  }
}

const user1 = new User("juwon", "park", "juwon@com", "1234");
user1.updatePassword("5678", "4321");
user1.updatePassword("5678", "1234");
console.log(user1.password);

// extends CLASS
class Admin extends User {
  deleteWebsite() {
    console.log("Deleting hte whole website...");
  }
}

const user2 = new Admin("admin", "park", "admin@com", "abcd");
user2.updatePassword("efgh", "dcba");
user2.updatePassword("efgh", "abcd");
console.log(user2.password);
user2.deleteWebsite();

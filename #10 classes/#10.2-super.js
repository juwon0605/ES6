class User {
    // constructor(options) {
    //     this.username = options.username;
    //     this.lastName = optionhs.lastName;
    //     this.email = options.email;
    //     this.password = options.password;
    //     // this.common = "common";
    //   }
    // 밑에가 가독성이 더 좋음
    constructor({username, lastName, email, password}) {
      this.username = username;
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

  // const user1 = new User({username:"juwon", lastName:"park", email:"juwon@com", password:"1234"});
  // 밑에가 가독성이 더 좋음
  const user1 = new User({
      username:"juwon", 
      lastName:"park", 
      email:"juwon@com", 
      password:"1234"
    });

  user1.updatePassword("5678", "4321");
  user1.updatePassword("5678", "1234");
  console.log(user1.password);
  
  // extends CLASS
  class Admin extends User {
    // 이렇게 하면 User의 contructor 정의가 사라짐...
    //   constructor(superAdmin) {
    //       this.superAdmin = superAdmin;
    //   }

    // 따라서 아래와 같이 super() 사용!
    constructor({username, lastName, email, password, superAdmin, isActive}) {
        // base class의 constructor을 호출!
        super({username, lastName, email, password});
        this.superAdmin = superAdmin;
        this.isActive = isActive;
      }
    deleteWebsite() {
      console.log("Deleting hte whole website...");
    }
  }
  
  const admin = new Admin({
    username:"juwon", 
    lastName:"park", 
    email:"juwon@com", 
    password:"1234",
    superAdmin: true,
    isActive: true
  });
  admin.updatePassword("efgh", "dcba");
  admin.updatePassword("efgh", "abcd");
  console.log(admin.password);
  admin.deleteWebsite();
  
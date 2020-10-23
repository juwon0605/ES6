// proxy는 filter와 비슷
const userObj = {
    username: "juwon",
    age: 26,
    password: 1234
};

const userFilter = {
    // Proxy에서 get:, set:과 같은 정의된 함수들을 trap이라고 함
    // MDN에서 trap 검색해서 많은 정의된 함수들 참고
    get: (target, prop, receiver) => {
        // console.log(target); // 이벤트 발생한 obj
        // console.log(prop);   // 접근하려던 obj의 property
        // console.log(receiver);   //
        return prop === "password" ? `${"*".repeat(5)}` : target[prop];
    },
    set: () => {
        console.log("userFilter-set");
    },
    deleteProperty: (target, prop) => {
        if (prop === "password") {
            return;
        } else {
            target[prop] = "DELETED";
            // delete target[prop];
        }
    }
};

// handler인 userFilter가 userObj에서 발생하는 이벤트들을 가로챔
// get: example
const filteredUser = new Proxy(userObj, userFilter);
console.log(filteredUser.username);
console.log(filteredUser.age);
console.log(filteredUser.password);
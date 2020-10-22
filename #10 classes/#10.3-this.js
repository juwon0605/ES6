class Counter {
    constructor({ initialNumber = 0, counterId, plusId, minusId}) {
        this.count = initialNumber;
        this.counter = document.getElementById(counterId);
        this.counter.innerText = initialNumber;
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.addEventListeners();
    }
    // this는 해당 스코프를 가리킨다 (파라미터로 전달되면 하위 스코프를 가리킨다)
    // addEventListeners() {
    //     this.plusBtn.addEventListener("click", this.increase);
    //     this.minusBtn.addEventListener("click", this.decrease);
    // }
    // increase() {
    //     this.count += 1;
    //     // 여기서 this는 button을 가리킴
    //     // this.repaintCount();
    // }
    // decrease() {
    //     this.count -= 1;
    //     // 여기서 this는 button을 가리킴
    //     // this.repaintCount();
    // }
    // arrow function으로 정의한 함수의 this는 항상 상위 스코프(해당 class)를 가리킨다!
    addEventListeners = () => {
        this.plusBtn.addEventListener("click", this.increase);
        this.minusBtn.addEventListener("click", this.decrease);
    };
    increase = () => {
        this.count += 1;
        // 여기서 this는 class 객체를 기리킴!
        this.repaintCount();
    };
    decrease = () => {
        this.count -= 1;
        // 여기서 this는 class 객체를 기리킴!  
        this.repaintCount();
    };
    repaintCount = () => {
        this.counter.innerText = this.count;
    };
}

new Counter({counterId: "count", plusId: "add", minusId: "minus"});
new Counter({counterId: "count2", plusId: "add2", minusId: "minus2", initialNumber: 777});
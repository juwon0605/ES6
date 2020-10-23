// WeakSet은 Set과 달리 add, delete, has 정도의 간단한 함수들만 갖음!
const weakSet = new WeakSet();

// WeakSet은 only object만 save!
// weakSet.add(1); error
// weakSet.add("one"); error
weakSet.add({position:"내부"});

const outSide = {
    position: "외부"
}
weakSet.add(outSide);
console.log(weakSet);

// 만약 어플리케이션에 메모리가 부족해서 garbage collector가 trigger 됐을 경우,
// 아무도 가리키지 않는 {position:"내부"} 객체는 메모리에서 삭제!
// weakSet이 가리키고 있는 outSide 객체는 메모리에 남김!
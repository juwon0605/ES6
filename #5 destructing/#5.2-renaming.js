const settings = {
  color: {
    chosen_color: "dark",
  },
};

const {
  color: { chosen_color: chosenColor = "light" },
} = settings;
// chosen_color -> chosenColor
console.log(chosenColor);

// // rename으로 업데이트 방법 (let으로 변수 선언)
// let chosenColor = "blue";

// // api로 받아온 이후

// ({
//     color: {chosen_color: chosenColor = "light"}
// } = settings;
// });

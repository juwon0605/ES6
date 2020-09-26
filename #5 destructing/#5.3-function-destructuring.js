// 1.argument가 너무 길어서 가독성 저해
// function saveSettings(followAlert, unfollowAlert, mrkAler, themeColor) {

// }

// 2.가독성은 높지만 객체의 각 변수에 접근 불편
// function saveSettings(settings) {}

// saveSettings({
//   follow: true,
//   unfollow: true,
//   mrk: true,
//   color: "green",
// });

// 3. 가독성 = 각 객체 명시 + default 설정
// function saveSettings({follow, alert, color} = "default") {
//     //saveSettings
// }

// saveSettings({
//   follow: true,
//   unfollow: true,
//   mrk: true,
//   color: "green",
// });

// 4. 활용 예시
function saveSettings({ notifications, color: { theme } }) {
  //saveSettings
}

saveSettings({
  notifications: {
    follow: true,
    unfollow: true,
    mrk: true,
  },
  color: {
    theme: "green",
  },
});

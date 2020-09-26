const settings = {
  notifications: {
    // follow: true,
    alert: true,
    unfollow: false,
  },
  color: {
    theme: "dark",
  },
};

// const notifications = settings.notifications;
// == const { notifications } = settings;

// 2차 탐색
// + default값 설정
const { notifications: { follow = false } = {} } = settings;

console.log(follow);

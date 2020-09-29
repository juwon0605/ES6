const follow = checkFollow();
const alert = checkAlert();

/*
const settings = {
  notifications: {
    follow: follow,
    alert: alert,
  },
};
*/

// use "shorthand property"
const settings = {
  notifications: {
    follow,
    alert,
  },
};

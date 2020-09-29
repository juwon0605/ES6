const user = {
  name: "juwon",
  age: 26,
  password: 12345,
};
user["password"] = null;
console.log(user);

// 1.cleaning object
/* 
  const killPassword = ({password, ...rest}) => rest;
  const cleanUser = killPassword(user);
  console.log(cleanUser);
  */

// 2.set default
/* 
  const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });
  console.log(setCountry(user));
  */

// 3. rename property
const rename = ({ name: rename, ...rest }) => ({ rename, ...rest });
console.log(rename(user));

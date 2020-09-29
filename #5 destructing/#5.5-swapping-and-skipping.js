// variable swapping
/*
let mon = "Sat";
let sat = "Mon";

[sat, mon] = ["Sat", "Mon"];
[sat, mon] = [mon, sat];

console.log(mon, sat);
*/

// omitting(생략)
const days = ["mon", "tue", "wed", "thu", "fir"];

const [, , , thu, fri] = days;

console.log(thu, fri);

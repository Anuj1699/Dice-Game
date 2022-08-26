const diceobj = [
    { dicenum : "1"},
    { dicenum : "2"},
    { dicenum : "3"},
    { dicenum : "4"},
    { dicenum : "5"},
    { dicenum : "6"},
]

let randomnum = Math.floor(Math.random() * 6) ;
let ans = diceobj[randomnum];
console.log(ans);

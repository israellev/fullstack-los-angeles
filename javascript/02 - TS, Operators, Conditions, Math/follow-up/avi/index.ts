
// console.log(Math.abs(-5)); // output: 5
// console.log(Math.ceil(4.2)); // output: 5
// console.log(Math.floor(4.8)); // output: 4
// console.log(Math.max(1, 3, 2)); // output: 3
// console.log(Math.min(1, 3, 2)); // output: 1
// console.log(Math.round(4.5)); // output: 5
// ---- class puzzle ---- //
let IQ
let Gender
IQ = Number(prompt('Enter your IQ please the number need to be bitween 1 -20 '));
Gender = (prompt('What is your gender'));
if (IQ => 1 && IQ <= 20) {
    if (IQ < 10) {
        
        alert('אתה אהבל')
    }
    else if (IQ > 10 && IQ <= 20) {
        
        alert('אתה תותח')
    };
};
// -------------------------------------------------------------------------------------------------

let userNum = Number(prompt('Enter number please'));
let num = userNum % 2;
if (num == 0) {
    alert('the number is : even');
}
else if (num != 0) {
    alert('the number is : odd');
};

// -------------------------------------------------------------------------------------------------
let numOfuser = prompt('Enter Number Please');
let arrey = [];
for (let i = 0; i <= numOfuser; i++) {
    arrey[i] = Number(prompt('Enter 3 Number Please'))
}
alert(Math.max(...arrey));

// -------------------------------------------------------------------------------------------------
//  Bonus Qustion 

let numberForEction = [1];
let Operator = prompt('Enter Operator Please -> (+, -, *, /, %, **)')

for (let i = 0 ; i <= numberForEction ; i++)
{
    numberForEction =  Number(prompt('Enter 3 Number Please'))
}

// -------------------------------------------------------------------------------------------------
//  home puzzle - 1

let invitePoeople = Number(prompt('how much poeple come to party ?'));
let pizzaSlice = Number(prompt('how much pizza slice everybody eat ?'));
let numberOfpiza = (invitePoeople * pizzaSlice) / 8;
alert(numberOfpiza);

// -------------------------------------------------------------------------------------------------
// home puzzle - 2

let priceCom = Number(prompt('how much cost the computer?'));
let savingMoney = Number(prompt('how much you save all week?'));
let week = priceCom / savingMoney;
alert(week)
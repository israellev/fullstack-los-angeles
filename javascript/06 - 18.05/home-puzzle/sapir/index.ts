export {}

function multiplicationTable (num:number){//אתחלתי פונקציה שמקבלת ערך מסוג מספר 
    for(let i =1; i<=10; i++){//בתוך הפונקציה תרוץ לולאה מ1 עד 10 ותעלה ב1 
        const result = num * i;//בכל איטרציה יתבצע חישוב של הערך שהתקבל בלולאה כפול המספר  
        console.log(`${num} * ${i} = ${result}`);//בסיום כל איטרציה יודפס החישוב שהתבצע 
    }
}


//-----------------------------------------------------------------------

function countdownTimer () {
   const userInput = Number(prompt("please enter a number:"));
   if (isNaN(userInput)){
    throw("invalid: seems like you entered an argument which is not of type Number");
   }
   for(let i=num; i>=0; i--){
   console.log(i);
   }
}

//-----------------------------------------------------------------------

function PalindromeChecker (){
    const userInput = prompt("please enter a string in order to check whether it a Palindrome or not:");
    let  stringInput = '';
    for(let i = userInput.length - 1; i>= 0; i--){
        stringInput += userInput[i];
    }
    if (userInput === stringInput){
        console.log(`${userInput} is a Palindrome!`);
    }else{
        console.log(`${userInput} is not a Palindrome!`);
    }
}
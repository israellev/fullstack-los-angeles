//anonymous function

const getFullName = (firstName: string, lastName: string) => {
return `${firstName} ${lastName}`
}
const fullName = getFullName("Sahar","Klapisch")
console.log(`your full name is ` + fullName)

//puzzle 2
function getUserAge () {
    const ageNumber = Number(prompt("What is your age?"))
    const isNotNumber = isNaN (ageNumber)
    if (isNotNumber) {
        throw "You can type only numbers! " 
    }
    else {
        return (ageNumber)
    }
}

try {
    const ageNumber = getUserAge()
    console.log("the user age is: ", ageNumber)
}
catch (Error) {
    alert (Error)
}

//puzzle 3
const enterUserAge = () => {
    const ageNumber = Number(prompt("What is your age?"));
    const isNotNumber = isNaN(ageNumber);
    if (isNotNumber) {
      throw "You can type only numbers!";
    } else {
      return ageNumber;
    }
  };
  
  try {
    const ageNumber = enterUserAge()
    console.log("The user age is: ", ageNumber);
  } catch (error) {
    alert(error);
  }

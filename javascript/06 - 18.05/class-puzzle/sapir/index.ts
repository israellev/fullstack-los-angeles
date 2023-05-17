export {}
let firstName = prompt("please enter first name :");
let lastName = prompt("please enter last name name :");

const GetfullName =(firstName:string, lastName:string):string => {
    return firstName + " " + lastName
}


const fullName = GetfullName(firstName, lastName);
console.log(fullName);
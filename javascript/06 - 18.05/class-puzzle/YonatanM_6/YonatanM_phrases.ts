export {}

// () => {
//    console.log("welcome") 
// }

// const greeting 2 = insert here all the block of the function, ie 
// const greeting2 =  () => { console.log("welcome") }


let name = prompt("what is your first name? ");
let lastName = alert("what is your last name? ");

let getFullName = (name: string, lastName: string):string  => {
        return name + " " + lastName
 }

 console.log(getFullName)

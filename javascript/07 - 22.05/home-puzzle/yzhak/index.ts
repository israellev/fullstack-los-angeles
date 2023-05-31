export {};

//6. Capital Letters
//Write a funtion that gets array of names and return array with those names in capital letter.
//for example from ["liad", "sarit"] it returns ["Liad", "Sarit"]
//(I already showed)

function CapitalLetters(name) {
  return name.toUpperCase();
}
const name = ["liad", "sarit"];
const result = CapitalLetters(name);
console.log(result);

//7. Upside Down
//Write a funtion that gets array of names and return array with those names in upside order.
//for example from ["liad", "sarit"] it returns ["sarit", "liad"]

function reverseNames(names) {
  return names.reverse();
}

const names = ["liad", "sarit"];
const reversedNames = reverseNames(names);
console.log(reversedNames);
alert(reversedNames);

////8-------------------------------

const phoneBook = ["saunet", "yossi", "shalom"];
function name(array: any) {
  let newPhoneBook = [];
  console.log(newPhoneBook);

  for (let index = 0; index < array.length; index++) {
    const element = array[index].toUpperCase();
    newPhoneBook.push(element);
    console.log(newPhoneBook);
  }
  return newPhoneBook;
}

name(phoneBook);
alert(phoneBook);

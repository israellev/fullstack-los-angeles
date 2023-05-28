export {};
// // Get full name
// make anonymous function that get firstName and lastName and return full name.
const getFullName = (firstName: string, lastName: string): string => {
  const full = firstName + " " + lastName;
  return full;
};
const firstName = prompt("your name is?");
const lastName = prompt("Your last name is?");
const fullName = getFullName(firstName, lastName);
console.log(fullName);


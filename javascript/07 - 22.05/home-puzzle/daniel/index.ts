export { }
// (5) First Letter
// Write a funtion that gets array of names and return array with first letter of those names in upper case.
// for example from ["liad", "sarit"] it returns ["S", "L"]




function getFirstLetter(names: string[]): string[] {
    const  firstLetters: string [] = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const firstLetter = name.charAt(0).toUpperCase();
        firstLetters.push(firstLetter);
    }
    return firstLetters;
}
const names = ["liad","sarit"];
const result = getFirstLetter(names);
console.log(result);



// 6. Capital Letters
// Write a funtion that gets array of names and return array with those names in capital letter.
// for example from ["liad", "sarit"] it returns ["Liad", "Sarit"]
// (I already showed)

function capitalizeNames(names: string[]): string[] {
    const capitalLetters: string[] = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        const capLetters = element.toUpperCase();
        capitalLetters.push(capLetters);
    }

    return capitalLetters;
}
const names = ["daniel", "liad", "ahron", "yehonatan"]
const result1 = capitalizeNames(names);
console.log(result1);
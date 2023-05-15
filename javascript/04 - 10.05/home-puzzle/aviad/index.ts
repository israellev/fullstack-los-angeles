// home puzzle loop - 1
export {}
let numOfCorrectSpelling =0;

for(let days = 1; days <=10; days++ ) { 
    const random = Math.random(); 
    if(random <= 0.7) {
     numOfCorrectSpelling++;
    }

}

console.log(`the student was able to spell the word correctly ${numOfCorrectSpelling} times`);

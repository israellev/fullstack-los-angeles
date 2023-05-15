export {}

//class-puzzle 1 from last lesson
const aviad = Number(prompt("what is the speed of aviad spaceships ? (put a number between  1 to 900)"))
const abam =Number (prompt("what is the speed of abam spaceships ? (put a number between  1 to 900)"))

if (aviad > abam ) {
        alert( "Aviad is winning the race")
    } 
    else if(aviad===abam){
        alert("they are Equal")
    } 
    
    if (aviad < abam ){
        alert("Abam is winning the race")
    }


    const Elect = Number(prompt("הזן את כמות החשמל שיוצר הפנאל הסולארית?"));

    if (Elect % 2 == 0) {
      alert(" זוגי");
    } else {
      alert("אי זוגי");
    }

    
///-----------בניית בניין

for(let num = 1; num <=10; num++ ) {
    console.log (`${"floor"} ${[num]} ${"confrim"}`)
}
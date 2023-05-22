export {}

//class-puzzle 1 from last lesson

///---------------מירוץ של אביעד 
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

///--------- פאנל סולארי של אבי ביינה
    const Elect = Number(prompt("הזן את כמות החשמל שיוצר הפנאל הסולארית?"));

    if (Elect % 2 == 0) {
      alert(" זוגי");
    } else {
      alert("אי זוגי");
    }

    
///---------בניית בניין של סהר

for(let num = 1; num <=10; num++ ) {
    alert (`${"floor"} ${[num]} ${"confrim"}`);
    console.log (`${"floor"} ${[num]} ${"confrim"}`);
}



//// ---------------- ,משמרת של יצחק 
for (let hour = 1; hour<=12; hour++) {
    if (hour>=8 === hour <= 16) {
        console.log(`the hour now is ${hour}:00 , yitzahk is on shift `) 
    } else console.log (`the hour now is ${hour}:00 , yitzahk was not on the shift .`)
    
}

/////// ------------------------------ התרגיל של שרית ---------

let correct = 0;

for (let day = 1; day <= 10; day++) {
  const SpelledCorrect = Math.random() <= 0.7;

  if (SpelledCorrect) {
    correct++;
  }
}

console.log(
  `The student spelled the word correctly ${correct} times in ten days.`
);


/////------------ פאנל סולארי אבי------

let totalAmount= 0 

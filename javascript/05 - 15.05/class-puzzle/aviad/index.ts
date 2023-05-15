//class puzzle 1:
export {};
let birthday = 1
while (birthday <= 23) {
    console.log("happy birthday" + birthday + " to Aviad")
    birthday++
}

//class puzzle 2:
for(let day=1; day<=10; day++){
    if (day % 2 == 0) {
        console.log("daniel passed " + day + "days please water the plants")
    }
}

//class puzzle 2 (with while):
let i = 1 
do{
    if (i % 2 == 0){
        console.log(`${"have aleardy passed : " } ${[i]} ${"day - "} ${"you need to watered the plants"}`)
    }
    i++
 }while (i <= 10)
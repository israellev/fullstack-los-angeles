export {}
/* 3 ways to loop: */
/* OPTION 1 */
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/*  OPTION 2 */
let days = 1
do {
    console.log(days)
    days ++
} while (days <= 10)

/* OPTION 3 */
let index = 0
while (index < 10) {
    console.log(index)
    index++
}


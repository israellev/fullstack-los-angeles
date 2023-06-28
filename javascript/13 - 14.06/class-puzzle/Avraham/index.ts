export { }
<<<<<<< HEAD
// fetch("https://jsonplaceholder.typicode.com/posts", // הפרמטר ההכרחי והיחיד שנצטרך להעביר לפאטצ הוא כתובת שממנו אנו רוצי למשוך מידע  URL
//     { method: "GET" })// באמצעות המתודה הזאת אנו מושכים מידה 
//     .then(res => res.json()) // עוד הבטחה שתפקידה להפוך את הגייסון שקיבלנו לגאווה סקריפט 
//     .then((res: any[]) => { // כאן אנו משתמשים בעוד "דאן" על מנת להמשיך פעולה על המידה שקיבלנו בהצלחה מהגייסון 
//         res.forEach((post) => { // פה אנו חוזרים על לולאה מספר פעמים על מנת לעבור על הפוסטים 
//               document.getElementById("postContainer").innerHTML = "" // לכתחילה אנו לא נציג כלום ולא יופיע לנו כלום 
//             const searchInput = document.querySelector("#searchInput") as HTMLInputElement // אנו מקשרים בין האינדס לבין הגאווה על מנת לבצע מניפולציות בכניסה בחיפוש 
=======
fetch("https://jsonplaceholder.typicode.com/posts", // הפרמטר ההכרחי והיחיד שנצטרך להעביר לפאטצ הוא כתובת שממנו אנו רוצי למשוך מידע  URL
    { method: "GET" })// באמצעות המתודה הזאת אנו מושכים מידה 
    .then(res => res.json()) // את המידע אנו תופסים מהגייסון והוא מחזיר לנו חיובי יכול להחזיר שלילי ואז נצטרך לעבוד עם קאטצ
    .then((res: any[]) => { // כאן אנו משתמשים בעוד "דאן" על מנת להמשיך פעולה על המידה שקיבלנו בהצלחה מהגייסון 
        res.forEach((post) => { // פה אbנו חוזרים על לולאה מספר פעמים על מנת לעבור על הפוסטים 
              document.getElementById("postContainer").innerHTML = "" // לכתחילה אנו לא נציג כלום ולא יופיע לנו כלום 
            const searchInput = document.querySelector("#searchInput") as HTMLInputElement // אנו מקשרים בין האינדס לבין הגאווה על מנת לבצע מניפולציות בכניסה בחיפוש 
>>>>>>> 597ce50efacdb47d3ac0150311dc3f74ebe9f30d

//             searchInput.addEventListener('input', () => { // כעת ניצור פונקציה עבור המילת מפתח בכדי לבדוק מה הלקוח הכניס מול מה שמצאנו
//                 console.log(searchInput)
//                 document.getElementById("postContainer").innerHTML = " " // לכתחילה אנו לא נציג כלום ולא יופיע לנו כלום 
//                 const searchValue = searchInput.value.toLowerCase() // הערך שהמשתמש הכניס אלינו נשים אותו באותיות קטנות 
//                 res.filter((post) => {
//                     const filterPost = Object.values(post).find(propValue =>
//                         propValue.toString().toLowerCase().includes(searchValue.toLowerCase()))
//                     return filterPost
//                 })
//                 .forEach(createPost) //כאן אנו קוראים לפונקציה שתציג לנו את הפוסטים לאחר סינוון   
//             })
//         })
//     })
//     .catch(error => console.log(error)); //  הרי הפאטצ הוא פרומייס "הצלחה" במידע ולא הצלחנו לתפוס את המידע נקבל ארור ובשביל שלא תתקע התוכנית אנו תופסים את הארור ומטפלים בה

// function createPost(post) {
//     const htmlPost = `
//         <div class="card mb-4" id="post-${post.id}">
//             <div class="card-header">
//                 <h5 class="card-title">${post.id} - ${post.title}</h5>
//                 <small class="text-muted">Posted by User ${post.userId}</small>
//             </div>
//             <div class="card-body">
//                 <p class="card-text">${post.body}</p>
//                 <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#comments-1" aria-expanded="false" aria-controls="comments-1">
//                 Show comments
//                 </button>
//                 <div class="collapse" id="comments-1">
//                 <!-- Comments will be dynamically added here -->
//                 </div>
//             </div>
//         </div>
//         `;
//     const newDiv = document.createElement("div") // יצירת דיב בתוך הגאווה סקריפט עבור הפוסטים
//     newDiv.innerHTML = htmlPost // להחיל את הדיב בתוך האייטיאמל
//     document.getElementById("postContainer").appendChild(newDiv) // יצירת ילד לדיב הקיים
// }
// console.log(JSON.stringify({ a: 1 })) // '{a: 1}' - object to json
// console.log(JSON.parse('{"a": 1}')) // {a: 1} - json to object

// console.log(JSON.stringify([{ a: 1 }])) // '[{a: 1}]' - array to json
// console.log(JSON.parse('[{"a": 1}]')) // [{a: 1}] - json to array


/* Rest API - 
url = "https://jsonplaceholder.typicode.com/posts/1"
method = "GET" | "POST" | "PUT" | "DELETE"
headers = {}
*/
//----------------------------------------------------------------------------------------------------------------------------------//
fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
    .then(res => res.json())
    .then((res: any[]) => {
        res.forEach(createPost)

        const searchInput = document.querySelector("#searchInput") as HTMLInputElement

        searchInput.addEventListener('keyup', () => {
            document.getElementById("postContainer").innerHTML = "" // delete all posts
            const searchValue = searchInput.value.toLowerCase() // הערך שהמשתמש הכניס אלינו נשים אותו באותיות קטנות 
            res.filter(post => {
                const filterPost = Object.values(post).find(propValue =>
                    propValue.toString().toLowerCase().includes(searchValue.toLowerCase()))
                    console.log(filterPost)
                return filterPost
            }).forEach(createPost) //כאן אנו קוראים לפונקציה שתציג לנו את הפוסטים לאחר סינוון 
        });
       
        const selectElement = document.getElementById("userSelect");
        const option = document.createElement("option")
        selectElement.appendChild(option)
        option.text = `user `
        selectElement.addEventListener(`change`,()=>{
          
        })
        
       
        
    
    })
    
    .catch(error => console.log(error))  //  הרי הפאטצ הוא פרומייס "הצלחה" במידע ולא הצלחנו לתפוס את המידע נקבל ארור ובשביל שלא תתקע התוכנית אנו תופסים את הארור ומטפלים בה



function createPost(post) {
    const htmlPost = `
        <div class="card mb-4 " id="post-${post.id} ">
            <div class="card-header">
                <h5 class="card-title">${post.id} - ${post.title}</h5>
                <small class="text-muted">Posted by User ${post.userId}</small>
            </div>
            <div class="card-body">
                <p class="card-text">${post.body}</p>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#comments-1" aria-expanded="false" aria-controls="comments-1">
                Show comments
                </button>
                <div class="collapse" id="comments-1">
                <!-- Comments will be dynamically added here -->
                </div>
            </div>
        </div>
        `;
    const newDiv = document.createElement("div")
    newDiv.innerHTML = htmlPost
    document.getElementById("postContainer").appendChild(newDiv)
    newDiv.style.backgroundColor = "skyblue";

    
}



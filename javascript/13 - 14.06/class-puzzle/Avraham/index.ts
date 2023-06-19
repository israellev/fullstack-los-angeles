export { }
fetch("https://jsonplaceholder.typicode.com/posts", // הפרמטר ההכרחי והיחיד שנצטרך להעביר לפאטצ הוא כתובת שממנו אנו רוצי למשוך מידע  URL
    { method: "GET" })// באמצעות המתודה הזאת אנו מושכים מידה 
    .then(res => res.json()) // את המידע אנו תופסים מהגייסון והוא מחזיר לנו חיובי יכול להחזיר שלילי ואז נצטרך לעבוד עם קאטצ
    .then((res: any[]) => { // כאן אנו משתמשים בעוד "דאן" על מנת להמשיך פעולה על המידה שקיבלנו בהצלחה מהגייסון 
        res.forEach((post) => { // פה אbנו חוזרים על לולאה מספר פעמים על מנת לעבור על הפוסטים 
              document.getElementById("postContainer").innerHTML = "" // לכתחילה אנו לא נציג כלום ולא יופיע לנו כלום 
            const searchInput = document.querySelector("#searchInput") as HTMLInputElement // אנו מקשרים בין האינדס לבין הגאווה על מנת לבצע מניפולציות בכניסה בחיפוש 

            searchInput.addEventListener('keyup', () => { // כעת ניצור פונקציה עבור המילת מפתח בכדי לבדוק מה הלקוח הכניס מול מה שמצאנו
                document.getElementById("postContainer").innerHTML = "" // לכתחילה אנו לא נציג כלום ולא יופיע לנו כלום 
                const searchValue = searchInput.value.toLowerCase() // הערך שהמשתמש הכניס אלינו נשים אותו באותיות קטנות 
                res.filter((post) => {
                    const filterPost = Object.values(post).find(propValue =>
                        propValue.toString().toLowerCase().includes(searchValue.toLowerCase()))
                    return !!filterPost
                })
                .forEach(createPost) //כאן אנו קוראים לפונקציה שתציג לנו את הפוסטים לאחר סינוון   
            })
        })
    })
    .catch(error => console.log(error)); // הרי הפאטצ הוא פרומייס "הצלחה" במידע ולא הצלחנו לתפוס את המידע נקבל ארור




function createPost(post) {
    const htmlPost = `
        <div class="card mb-4" id="post-${post.id}">
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
    const newDiv = document.createElement("div") // יצירת דיב בתוך הגאווה סקריפט עבור הפוסטים
    newDiv.innerHTML = htmlPost // להחיל את הדיב בתוך האייטיאמל
    document.getElementById("postContainer").appendChild(newDiv) // יצירת ילד לדיב הקיים
}


                    // return post.title.toLowerCase().includes(searchValue) || // כאן אנו מבצעים את הפילטר על כל הפוסטים ובודקים ערך ערך בפוסט בכדי למצוא את הערך הנדרש
                    //     post.body.toLowerCase().includes(searchValue) ||
                    //     post.userId.toString() === searchValue ||
                    //     post.id.toString() === searchValue;
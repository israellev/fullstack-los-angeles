export {}
// @ts-ignore
fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
    .then(res => res.json())//התגובה הראשונה מהאיי פי איי מגיעה בפורמט גולמי אז השימוש בדן הראשוני נועדה כדי להמיר את התגובה לפורמט גייסון בשימוש רס.גייסו
    .then((res: any[]) => {//הדן השני מקבל את הקובץ גייסון המנותח שצפוי להיות מערך אובייקטים של פוסטים ומקבל פונקצית קולבק פוראיץ
        res.forEach(createPost) //לולאה שתעבור על כל אובייקט פוסט במערך רס ניתן לראות מטה מה הפונקציה עושה כולל הסבר 

        const searchInput = document.querySelector("#searchInput") as HTMLInputElement//לאחר מכן הקוד בוחר אלמנט עם ה-איי די חיפוש אינפוט באמצעות document.querySelector,  הוא מטיל את האלמנט לסוג HTMLInputElement כדי לגשת למאפיינים ולשיטות שלו.
        
        searchInput.addEventListener('keyup', () => {//מאזין אירועים מתווסף לחיפוש אינפוט  כדי להאיזן לאירוע בשם קי-אפ כאשר המשתמש מקליד בשדה חיפוש מופעלת פונקציה
            document.getElementById("postContainer").innerHTML = "" //בתוך הפונקציה של מאזין האירוע התוכן של פוסט קונטיינר מנוקה עי הגדרת האינר אייץ'-טי-מ-ל למחרוזת ריקה וזה מסיר את כל הפוסטים שהוצגו 
            
            const value = searchInput.value //הערך הנוכחי של מה שהמשתמש מקליד בשורת החיפוש מאוחזר , ערך זה ישמש לסינון הפוסטים

            const searchResult = smartSearch (value);//פונקציה זו מסננת את מערך הפוסטים המבוססים על שאילתת החיפוש ומחזירה את התוצאה המסוננת.

            function smartSearch(searchInput) {
                const searchResult = res.filter((res) => {
                    return Object.values(res)
                        .some((value) => value && value.toString().toLowerCase().includes(searchInput.toLowerCase()));
                });
                return searchResult;
            }
            searchResult.forEach(createPost);
            //The filtered searchResult array is iterated using forEach, and for each post object, the createPost function is called to generate HTML markup and append it to the postContainer element

    });
    })
    .catch(error => console.log(error))

   

function createPost(post) {
//The createPost function takes a post object as a parameter.

// It generates HTML markup representing the post's data and creates a new div element.
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
    const newDiv = document.createElement("div")
    newDiv.innerHTML = htmlPost
    document.getElementById("postContainer").appendChild(newDiv)
}

// The HTML markup is assigned to the innerHTML property of the div element.
// Finally, the div element is appended to the postContainer element in the document.


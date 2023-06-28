export { }

// https://getbootstrap.com/docs/5.0/getting-started/introduction/

// json is string that use in all internet and laguages 
console.log(JSON.stringify({ a: 1 })) // '{"a": 1}' - object to json
console.log(JSON.parse('{"a": 1}')) // {a: 1} - json to object

console.log(JSON.stringify([{ a: 1 }])) // '[{a: 1}]' - array to json
console.log(JSON.parse('[{"a": 1}]')) // [{a: 1}] - json to array


// @ts-ignore
document.getElementById("searchInput").value = localStorage.getItem("inputSearch")

/* Rest API - 
url = "https://jsonplaceholder.typicode.com/posts/1"
method = "GET" | "POST" | "PUT" | "DELETE"
headers = {}
*/


fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })//הפיטצ מייבא אפיאיי/קישור הייצטיטיפי ומוסיפים לו מטודות גט / פוט / פוש /ועריכה
  .then(res => res.json())// לקחנו את רשימת הפוסטים מהקישור ועשינו עליה פעולה להחליף את האובקייקט לג'ייסון
  .then((res: { id: number, userId: number, title: string, body: string }[]) => {// אמרנו פה שפוסט גייסון הוא מורכז מאיי די מספרים  ויוזר מספרים וטייטל מחרוזת ובודי מחרוזת
    res.forEach(createPost) // deploy all posts // קראנו לגייסון ועשינו עליו פונקציה שעוברת על כל הפוסטים קראנו לה קרייטפוסט

    const searchInput = document.querySelector("#searchInput") as HTMLInputElement // אני מספר לאיצטיאמל שהוא מקבל אינפוט על ידי אס איצטאמך אינפוט אלמנט

    searchInput.addEventListener('keyup', () => { // עשינו על משתנה החיפוש הוספת אירוע שכאשר נשים את אצבע על המקלדת הוא יעשה משהו
      document.getElementById("postContainer").innerHTML = "" // delete all posts //קראנו למאלמנט מהאייצטיאמל בשם פוסט קונטיינר והוספנו לו מרחאות שהארוע חל עליהן

      const value = searchInput.value // what the user type // משתנה חדש בשם ערך שחל על המשתנה חיפוש והוא אומר לו משתנה חיפוש תביא לי ערך מהפוסטים
      res.filter(post => { // משתנה של הפוסטים עושה פילטר על רשימת הפוסטים והוא אמור להחזיר לו משהו
        // return true if you find the search in the post, and false if not

      }).forEach(createPost) // עשינו פונקציית פוראיצ על יצירת פוסט
    })
  })
  .catch(error => console.log(error))



function createPost(post) {
  const htmlPost = `
<div class="card mb-4" id="post-${post.id}">
  <div class="card-header">
    <h5 class="card-title">${post.id} - ${post.title}</h5>
    
    <small class="text-muted">Posted by User - ${post.userId}</small>
  </div>
  <div class="card-body">
    <p class="card-text"> <h4>the body is ... </h4>-${post.body}</p>
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
  document.getElementById("postContainer").appendChild(newDiv)// תביא לי אלמנט מהאצטיאמל בשם האי די
}


// 5. Bonus - impelemt search in the post!
function SearchTest(res, createPost: string, textToSearch: string) {
  return res.filter(newpost => {
    const keys = Object.keys(newpost);
    const result = keys.find(key => {
      const value = newpost[key].toString().toLowerCase().trim();
      return value.includes(textToSearch.toLowerCase());
    });
    return !!result;
  });
}
//----------------------------------------------------------------------------------------




// const json = `[
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
//     }
// ]`
  
//   const arrayOfObjects = JSON.parse(json)
//   console.log(arrayOfObjects)

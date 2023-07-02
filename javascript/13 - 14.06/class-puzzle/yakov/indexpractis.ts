export {};
/* const student = {
  name: "yakov mangisto",
  age: 32,
  occupation: "electrical engineer",
  futurePlans: "stude mor",
  scor: 50,
};
console.log("student", student); //מציג את האובייקט

let json = JSON.stringify(student); //הפוך את האובייקט לג'ייסון
console.log("json", json);

let object = JSON.parse(json); // הפוך את הג'ייסון לאובייקט
console.log("object", object);
 */
/* Rest API - 
url = "https://jsonplaceholder.typicode.com/posts/1"
method = "GET" לקחת מהאתר| "POST" להוסיף לאתר | "PUT" לערוך באתר| "DELETE" למחוק מהאתר
headers = {}
*/

//@ts-ignore
const response = fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
}) //תיקח מידע מהאתר
  .then((res) => res.json()) //תביא לי את הג'ייסון כאובייקט

  .then(
    (res: { id: number; userId: number; title: string; body: string }[]) => {
      const searchInput = document.querySelector(
        "#searchInput"
      ) as HTMLInputElement; //אני ניגש לאידי באיצ'טימל
      const postContainer = document.getElementById("postContainer"); //show all posts
      console.log(postContainer, "1");
      //כאשר אני מתחיל לבצע חיפוש תמחק את כל הפוסטים
      searchInput.addEventListener("keyup", () => {
        postContainer.innerHTML = "";
        const value = searchInput.value.toLocaleLowerCase().trim(); //מה שהמשתמש הקליד
        res.filter((post): boolean => {
          const values = Object.values(post);
          return values.toString().includes(value.toLocaleLowerCase());
        });

        res.forEach(creatPost); //לכל אוביקט הפונקציה יוצרת פוסט
      });
      res.forEach(creatPost); //לכל אוביקט הפונקציה יוצרת פוסט
    }
  )

  .catch((error) => console.log(error));

// Promis function - פונקציה שמבטיחה להחזיר משהו
//פונקציה שיוצרת כל פעם פוסט אחד
function creatPost(post) {
  // "userId": 1,
  // "id": 1,
  // "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  // "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

  const htmlPost = `
<div class="card mb-4" id="post- ${post.id}">
<div class="card-header">
<h5 class="card-title">${post.id} ${post.title}</h5>
<small class="text-muted">Posted by User ${post.userId}</small>
</div>
<div class="card-body">
<p class="card-text">${post.body}.</p>
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#comments-1" aria-expanded="false" aria-controls="comments-1">
  Show comments
</button>
<div class="collapse" id="comments-1">
  <!-- Comments will be dynamically added here -->
</div>
</div>
</div>
`;
  const newDiv = document.createElement("div"); //פה אני יוצר אלמנט חדש מסוג דייב
  newDiv.innerHTML = htmlPost; // פה אני משייך את הדייב החדש לקובץ איצ'טימל
  document.getElementById("postContainer").appendChild(newDiv); //Added a child to the postContainer,
}

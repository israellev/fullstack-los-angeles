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

type IPost = {id: number, userId: number, title: string, body: string}

fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
    .then(res => res.json())
    .then((postList: IPost[]) => {
        postList.forEach(createPost) // deploy all posts
        const searchInputElement = document.getElementById("searchInput") as HTMLInputElement
        
        // listener - every time keyboard up:
        // 1. delete all posts
        // 2. filter only posts you find the user input
        // 3. deploy only filtered posts
        searchInputElement.addEventListener('keyup', () => {
            const value = searchInputElement.value.toLowerCase().trim()
            localStorage.setItem("inputSearch", value)
            console.log(value)
            
            // 1. delete all posts
            document.getElementById("postContainer").innerHTML = ""

            // 2. filter only posts you find the user input
            const filteredPostList = postList.filter((post) => {
                const values = Object.values(post) // [1, 1, "post title...", "post body..."]
                const valuesToString = values.toString() // '1,1,post title...,post body...'
                return valuesToString.includes(value.toLowerCase())
            })
            console.log(filteredPostList)

            // 3. deploy only filtered posts
            filteredPostList.forEach(createPost)
        })
    })
    .catch(error => console.log(error))



function createPost(post: IPost) {
    const newDiv = document.createElement("div")
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
    newDiv.innerHTML = htmlPost
    document.getElementById("postContainer").appendChild(newDiv)
}


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



localStorage.setItem("name", "Sarit Tzvika") // save in the storage
localStorage.getItem("name") // get from the storage
localStorage
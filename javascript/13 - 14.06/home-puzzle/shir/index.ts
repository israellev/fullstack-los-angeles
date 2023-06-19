export {}


// @ts-ignore
fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
    .then(res => res.json())
    .then((res: any[]) => {
        res.forEach(createPost) // deploy all posts

        const searchInput = document.querySelector("#searchInput") as HTMLInputElement
        
        searchInput.addEventListener('keyup', () => {
            document.getElementById("postContainer").innerHTML = "" // delete all posts
            
            const value = searchInput.value // what the user type
            res.filter(post=>{ 
                const keys= Object.keys(post);
                const result= keys.find((key)=>{
                    const value1= post[key].toString().toLowerCase()
                return value1.includes(value);
                });
                return !!result
            })


               // return post.includes(value).toString().toLowerCase()  ???

               
                // return true if you find the search in the post, and false if not
                
            .forEach(createPost)
        });
    })
    .catch(error => console.log(error))



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
    const newDiv = document.createElement("div")
    newDiv.innerHTML = htmlPost
    document.getElementById("postContainer").appendChild(newDiv)
}

// bonus: 



//  res.filter(post=>{
//     const value= Object.values(post)
//     const result= value.find(post=> post.toString().toLowerCase())
//    return result.includes(value)
//    return !!result

// })



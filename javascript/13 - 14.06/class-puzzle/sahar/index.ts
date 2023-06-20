export {}

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

        //extracting the user Id from the postlist & adding it to the selection bar on HTML by function
        const userId = new Set(postList.map(post => post.userId))
        userId.forEach((userId) => createSelectionBar(userId)); 

        })      
        
    
      .catch(error => console.log(error))

        //creating a function that adds the extracted user Id to the selection bar
        function createSelectionBar(userId) {
          const selectElement = document.getElementById("selection");
        
          const optionElement = document.createElement("option");
          optionElement.value = userId;
          optionElement.textContent = `User ${userId}`;
        
          selectElement.appendChild(optionElement);
          
          
      };
      
      
       

function createPost (post) {
  const htmlPost = `
      <div class="card mb-4" id="post-${post.id}">
      <div class="card-header">
        <h5 class="card-title">${post.title}</h5>
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

  const newDiv = document.createElement("div");
   newDiv.innerHTML = htmlPost;
   document.getElementById("postContainer").appendChild(newDiv);
}


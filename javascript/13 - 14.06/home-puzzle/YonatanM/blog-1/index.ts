export {}

fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"})
.then(res => res.json())
.then((res: {id: number, userId: number, title: string, body: string}[]) => {

    const htmlPost = `
<div class="card mb-4" id="post-1">
  <div class="card-header">
    <h5 class="card-title">Post Title</h5>
    <small class="text-muted">Posted by User Name</small>
  </div>
  <div class="card-body">
    <p class="card-text">This is the body of the post. It's where the content goes.</p>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#comments-1" aria-expanded="false" aria-controls="comments-1">
      Show comments
    </button>
    <div class="collapse" id="comments-1">
      <!-- Comments will be dynamically added here -->
    </div>
  </div>
</div>
`;
    // const newDiv = document.createElement("div")
    // newDiv.innerHTML = htmlPost
    // document.getElementById("postContainer").appendChild(newDiv)
})




//HOMEWORK:
// class puzzle:

// Copy the blog-1 folder to your name:

// 1. Fetch and Display Post Titles

// a. Create a simple HTML page with an empty div that has the 
//id postContainer.
// b. Use JavaScript to fetch data from 
//https://jsonplaceholder.typicode.com/posts.
// c. Display the title of each post inside postContainer 
//using h2 elements.


// 2. Display More Post Details

// a. In addition to the title, display the body of each post. Use a p element for the body.
// b. Include the post id as an attribute on each h2 element. This will be useful in later exercises.


// 3. Add Post Filtering

// a. Add an input text field to your page that allows users to enter a search term.
// b. Add a button next to the input field that, when clicked, filters the displayed posts to only include those whose title includes the search term.
// c. Make sure the filter is case-insensitive.


// 4. Display User Information

// a. For each post, fetch the details of the user who wrote the post from https://jsonplaceholder.typicode.com/users/{userId}.
// b. Display the user's name and email under the title of their post.


// home puzzle:

// 1. study the example of lesson 12 carfully!!!
// 2. write youself search function on the students list - understand each word
// 3. play with fetch function 
// 4. play with the blog!!
// 5. Bonus - impelemt search in the post!

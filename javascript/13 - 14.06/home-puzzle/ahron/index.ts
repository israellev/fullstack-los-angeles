
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
    // document.getElementBy
})
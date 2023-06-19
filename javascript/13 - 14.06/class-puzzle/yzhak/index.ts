export {};

fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
  .then((res) => res.json())
  .then((res: any[]) => {
    res.forEach(createPost);

    const searchInput = document.querySelector(
      "#searchInput"
    ) as HTMLInputElement;

    searchInput.addEventListener("keyup", () => {
      document.getElementById("postContainer").innerHTML = "";

      const value = searchInput.value.toLocaleLowerCase();
      res
        .filter((post) => {
          const key = Object.keys(post);
          const result = key.find((keys) => {
            const input = post[keys].toString().toLowerCase();
            return input.includes(value);
          });
          return !!result;
        })
        .forEach(createPost);
    });
  })
  .catch((error) => console.log(error));

function createPost(post) {
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

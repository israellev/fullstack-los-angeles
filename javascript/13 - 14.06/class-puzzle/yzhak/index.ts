export {};

document.getElementById("searchInput").value =
  localStorage.getItem("inputSearch");

fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
  .then((res) => res.json())
  .then((postList: []) => {
    postList.forEach(createPost);
    const searchInputElement = document.getElementById(
      "searchInput"
    ) as HTMLInputElement;

    searchInputElement.addEventListener("keyup", () => {
      const value = searchInputElement.value.toLowerCase().trim();
      localStorage.setItem("inputSearch", value);
      console.log(value);

      document.getElementById("postContainer").innerHTML = "";

      const filteredPostList = postList.filter((post) => {
        const values = Object.values(post);
        const valuesToString = values.toString().replace(/\*/g, "");
        return valuesToString.includes(value.toLowerCase());
      });
      console.log(filteredPostList);

      filteredPostList.forEach(createPost);
    });
  })
  .catch((error) => console.log(error));

function createPost(post) {
  const newDiv = document.createElement("div");
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
  newDiv.innerHTML = htmlPost;
  document.getElementById("postContainer").appendChild(newDiv);
}

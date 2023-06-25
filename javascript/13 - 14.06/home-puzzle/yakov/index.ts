export {};

// @ts-ignore
fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
  .then((res) => res.json())
  .then(
    (
      postList: { id: number; userId: number; title: string; body: string }[]
    ) => {
      const searchInput = document.querySelector("#searchInput");
      const postContainer = document.getElementById("postContainer");

      searchInput.addEventListener("keyup", () => {
        postContainer.innerHTML = "";
        postList.forEach(creatPost);
      });

      postList
        .filter((post, textToSearch: any): any => {
          const keys = Object.keys(post);
          const result = keys.find((key) => {
            const value = post[key].toString().toLowerCase();
            return value.includes(textToSearch.toLowerCase());
          });
          return !!result;
        })
        .forEach(creatPost);
    }
  );

function creatPost(post) {
  const htmlPost = `s
<div class="card mb-4" id="post by ${post.userId} ">
  <div class="card-header">
    <h5 class="card-title">${post.id} - ${post.title}</h5>
    <small class="text-muted">"post by user ${post.userId}"</small>
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
}

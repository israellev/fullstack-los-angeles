export {};
// class puzzle:
// 1. add search options for the blog - by chosing user_id from list
// 2. save and get the search and select user id in the localStorage
// 3. filter "*" from search input with regex

// @ts-ignore
type IPost = { id: number; userId: number; title: string; body: string };
fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
  .then((res) => res.json())
  .then((postList: IPost[]) => {
    postList.forEach(creatPost);
    const searchInput = document.querySelector(
      "#searchInput"
    ) as HTMLInputElement;
    // const postContainer = document.getElementById("postContainer");

    searchInput.addEventListener("keyup", () => {
      const value = searchInput.value.toLocaleLowerCase().trim();
      console.log(value);
      document.getElementById("postContainer").innerHTML = "";

      postList
        .filter((post) => {
          const values = Object.values(post);
          return values.toString().includes(value.toLocaleLowerCase());
        })
        .forEach(creatPost);
    });
  });

function creatPost(post: IPost) {
  const newDiv = document.createElement("div");
  const htmlPost = `
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
  newDiv.innerHTML = htmlPost;
  document.getElementById("postContainer").appendChild(newDiv);
}

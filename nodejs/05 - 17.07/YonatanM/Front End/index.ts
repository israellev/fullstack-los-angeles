export { }

// https://getbootstrap.com/docs/5.0/getting-started/introduction/

// @ts-ignore
document.getElementById("searchInput").value = localStorage.getItem("inputSearch")

// טייפים מה כל מערך מכיל 
type IPost = { id: number, userId: number, title: string, body: string, imageUrl: string }
type IComment = { id: number, postId: number, name: string, email: string, body: string }
// type Iphoto = { id: number, albumId: number, title: string, url: string, thumbnailUrl: string }

//  יצירת אלמנטים חדשים על ידי קריאת האיי די שלהם בדף אייצטיאמל
const postContainerElement = document.getElementById("postContainer")// דיב 
const searchInputElement = document.getElementById("searchInput") as HTMLInputElement//החיפוש בדיב 
const selectUserElement = document.getElementById("selectUser") as HTMLSelectElement// הדרופ דאון משתמשים

// const albumContainer = document.getElementById("album-container");

/* Goal: add select user filter
1. V add html <select> with id of "selectUser"
2. V make list of user ids number[] from IPost[] without duplications
3. V build <option value="{userId}">User {userId}</optoin> dynamiclly from user ids list.
4. V actvie the search filter and select user filter together.
 */

init()

async function init() { //פונקציית אסינכרון ממתין בפוקנציית אבטחה  
    // async await (in Promise functions)
    const res = await fetch("/posts", { method: "GET" })
    const postList = await res.json()//הפיכת רשימת הפוסטים לגייסון 

    // deploy 10 users <option>
    const userIds = getUserIdsFromPostList(postList) // [1, 2, 3, ...] // 
    userIds.forEach(createOption) //  עובר על כל היוזר איי די ופותח אופציה חדשה 

    // check if exist in storage - add it to elements
    if (localStorage.getItem('searchValue')) // שומר את הערך של החיפוש 
        searchInputElement.value = localStorage.getItem('searchValue')
    if (localStorage.getItem('selectedUserId'))
        selectUserElement.value = localStorage.getItem('selectedUserId') // שומר את הערך של בחירת יוזר

    // show all posts (with the filters)
    deletePostsAndActiveFilter(postList)
    // postList.forEach(createPost) // show all 100 posts (without filter)

    // listen to search and select 
    searchInputElement.addEventListener('keyup', () => deletePostsAndActiveFilter(postList)) // אירוע הקשה על המקלדת
    selectUserElement.addEventListener('change', () => deletePostsAndActiveFilter(postList)) // אירוע בחירה ביוזרים
    return true
}


// fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
//     .then(res => res.json())
//     .then((postList: IPost[]) => {

//     })
//     .catch(error => console.log(error))

// פחונקצייה זו עוברת על רשימת הפוסטים ומחזירה את ההיוזר איי די במספרים
function getUserIdsFromPostList(postList: IPost[]): number[] {
    console.log("postList", postList)
    const allUserIds = postList.map(post => post.userId)
    console.log("allUserIds", allUserIds)
    const userIds = Array.from(new Set(allUserIds))
    console.log("userIds", userIds)
    return userIds
}
// פונקציה זו יוצרת אופציה חדשה על ידי פרמטר איי די ומחזירה את המספר שלו
function createOption(userId: number) {
    const newOption = document.createElement('option')
    newOption.value = userId.toString()
    newOption.innerText = `User ${userId}`
    selectUserElement.appendChild(newOption)
}
// פונקציה זו פותחת דיב חדש על ידי הפרמטר אי פוסט ויוצרת דיב חדש אם ערכים שקבעתי 
function createPost(post: IPost) {
    const newDiv = document.createElement("div");
    const htmlPost = `
          <div class="card mb-4" id="post-${post.id}">
              <div class="card-header">
                  <h5 class="card-title">${post.id} - ${post.title}</h5>
                  <small class="text-muted">Posted by User ${post.userId}</small>
                  <i onclick="deletePost('${post.id}')" class="fas fa-trash"
                    style="position: absolute; right: 8px;top: 8px;cursor: pointer;">
                </i>
              </div>
              <div class="card-body">
                  <p class="card-text">${post.body}</p>
                  <button onClick="showComments(${post.id})" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#comments-1" aria-expanded="false" aria-controls="comments-1">
                      Show comments
                  </button>
                  <div id="comments-${post.id}">
                  <!-- Comments will be dynamically added here -->
                  </div>
                  <br>
                  <img src="${post.imageUrl}" style="height: 100px; width: auto"/>
              </div>
          </div>
          `;
    newDiv.innerHTML = htmlPost;
    postContainerElement.appendChild(newDiv);
  }  

  async function deletePost(postId: number) {
    const res = await fetch(`/posts/${postId}`, {method: "DELETE"})
    const deletedPost = await res.json()
    if (deletedPost) 
      document.getElementById(`post-${postId}`).remove()
  }
  
  function deletePostsAndActiveFilter(postList: IPost[]) {
    // listener - every time search keyboard up or change select user:
  
    // get input and select option values:
    const searchValue = searchInputElement.value
      .toLowerCase()
      .trim()
      .replace(/[<>]/g, "");
  
    localStorage.setItem("searchValue", searchValue);
    const selectedUserId = selectUserElement.value;
    localStorage.setItem("selectedUserId", selectedUserId);
  
    // 1. delete all posts
    postContainerElement.innerHTML = "";
  
    // 2. filter only posts you find the user input
    const filteredPostList = postList.filter((post: IPost) => {
      const isPostInSearch = isSearchIncludesInThePost(post, searchValue);
      const isPostInList = isPostInUserList(post, selectedUserId);
      return isPostInSearch && isPostInList;
    });
  
    // 3. deploy only filtered posts
    filteredPostList.forEach(createPost);
  }
  
  function isSearchIncludesInThePost(post: IPost, searchValue: string): boolean {
    const values = Object.values(post); // [1, 1, "post title...", "post body..."]
    const valuesToString = values.toString().toLowerCase(); // '1,1,post title...,post body...'
    return valuesToString.includes(searchValue);
  }
  
  function isPostInUserList(post: IPost, selectedUserId: string): boolean {
    if (selectedUserId === "all-users") return true;
    return post.userId.toString() === selectedUserId;
  }
  
  async function showComments(postId: number) {
    const commentsElement = document.getElementById(`comments-${postId}`);
    if (!commentsElement.children.length) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        { method: "GET" }
      );
      const commentList = await res.json();
      commentList.forEach(createCommnet);
    } else {
      if (commentsElement.classList.contains("collapse"))
        commentsElement.classList.remove("collapse");
      else commentsElement.classList.add("collapse");
    }
  }
  
  function createCommnet(comment: IComment) {
    const commentsElement = document.getElementById(`comments-${comment.postId}`);
    const newDiv = document.createElement("div");
    const htmlPost = `
      <div id="comments-${comment.id}">
          <div class="card card-body">
              <h6>Comments:</h6>
              <div class="comment">
                  <strong>Name: </strong>${comment.name}<br>
                  <strong>Email: </strong>${comment.email}<br>
                  <strong>Comment: </strong>${comment.body}
              </div>
          </div>
      </div>`;
    newDiv.innerHTML = htmlPost;
    commentsElement.appendChild(newDiv);
  }
  
  function createPostToggle() {
    const iconElement = document.getElementById("plusPost")
    const formElement = document.getElementById("createPostForm")
    const isPlus = iconElement.classList.contains("fa-plus-circle")
    if (isPlus) {
      iconElement.classList.remove("fa-plus-circle")
      iconElement.classList.add("fa-minus-circle")
      formElement.style.display = 'block'
  
    } else {
      iconElement.classList.remove("fa-minus-circle")
      iconElement.classList.add("fa-plus-circle")
      formElement.style.display = 'none'
    }
  
  }
 
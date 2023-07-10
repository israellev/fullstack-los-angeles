export {}

type IPost = {id: number, userId: number, title: string, body: string, image: any}
type IComment = {id: number, postId: number, name: string, email: string, body: string}


const postContainerElement = document.getElementById("postContainer");
const searchInputElement = document.getElementById("searchInput") as HTMLInputElement
const selectionElement = document.getElementById("selection") as HTMLSelectElement

const imagesByUser = {
  1: "images/user_1.jpg",
  2: "images/user_2.jpg",
  3: "images/user_3.jpg",
  4: "images/user_4.jpg",
  5: "images/user_5.jpg",
  6: "images/user_6.jpg",
  7: "images/user_7.jpg",
  8: "images/user_8.jpg",
  9: "images/user_9.jpg",
  10: "images/user_10.jpg"
}

init()

async function init() {
    // async await (in Promise functions)
    const res = await fetch("http://localhost:3000/posts", { method: "GET" })
    const postList = await res.json()
    

      const userIds = getUserFromPostList(postList)
      userIds.forEach(createOption)
      postList.forEach(showComments)
     
        //  // check if exist in storage - add it to elements
        // if (localStorage.getItem('searchValue'))
        // searchInputElement.value = localStorage.getItem('searchValue')
        // if (localStorage.getItem('selectedUserId'))
        // selectionElement.value = localStorage.getItem('selectedUserId')

         // show all posts (with the filters)
         deletePostAndActivefilter(postList)
       // postList.forEach(createPost) // show all 100 posts (without filter)
        
        searchInputElement.addEventListener('keyup', () => deletePostAndActivefilter(postList))
        selectionElement.addEventListener('change', () => deletePostAndActivefilter(postList))
        return true    
        
      }   
    
    
// fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
//     .then(res => res.json())
//     .then((postList: IPost[]) => {
       
//     })
//     .catch(error => console.log(error))


//functions list:

//function number 1:
function deletePostAndActivefilter(postList : IPost[]){
    const searchedValue = searchInputElement.value.toLowerCase().trim()
    const selectedUserId = selectionElement.value;
    // 1. delete all posts
    postContainerElement.innerHTML = ""
    // 2. filter only posts you find the user input
    const filteredPostList = postList.filter((post) => {
      const isPostInSearch = isSearchIncludesInThePost(post, searchedValue)
      const isPostInList = isPostInUserList(post, selectedUserId) 
      return isPostInSearch && isPostInList;
    })
    // 3. deploy only filtered posts
    filteredPostList.forEach(createPost)
  }


//function number 2:
//creating a function that adds the extracted user Id to the selection bar
function createOption(userId: number) {
  const newOption = document.createElement('option')
  newOption.value = userId.toString();
  newOption.textContent = `User ${userId}`;
  selectionElement.appendChild(newOption);   
};   


///function number 3:
//extracting the user Id from the postlist & adding it to the selection bar on HTML by function
function getUserFromPostList(postList: IPost[]): number[] {
  const allUserIds = postList.map(post => post.userId);
  const userIds = Array.from(new Set(allUserIds))
  return userIds
};

//function number 4:
function isSearchIncludesInThePost(post: IPost, searchedValue: string): boolean {
    const values = Object.values(post) // [1, 1, "post title...", "post body..."]
    const valuesToString = values.toString().toLowerCase() // '1,1,post title...,post body...'
    return valuesToString.includes(searchedValue.toLowerCase())
}


//function number 5:
function isPostInUserList(post: IPost, selectedUserId: string): boolean {
  if (selectedUserId === '0')
    return true
  return post.userId.toString() === selectedUserId
}

//function number 6:
function addImageByUser(userId) {
  if (userId in imagesByUser) {
    return imagesByUser[userId];
  }
  // If the userId doesn't match any keys in imagesByUser, return a default image URL
  //return '/images/default.jpg';
}

//function number 7:
function hoverMouse(element) {
  element.addEventListener('mouseover', () => {
    element.style.cursor = 'pointer';
  });  
}

///function number 9:
function createPost (post) {
  
  const image = addImageByUser(post.userId);

   const htmlPost = `
  <div class="card mb-4" id="post-${post.id}">
    <div class="card-header">
      <h5 class="card-title">${post.id} - ${post.title}</h5>
      <small class="text-muted">Posted by User ${post.userId}</small>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-2">
          <a href="profileUser.html" target="_blank">
            <img src=${image} style="width: 100px; height: 100px; object-fit: cover; object-position: center; border-radius: 50%; cursor: pointer;" alt="Profile Image user number ${post.id}">
          </a>
        </div>
        <div class="col-9">
          <div class="card-body">
            <p class="card-text">${post.body}</p>
          </div>
          <button onClick="showComments(${post.id})" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#comments-${post.id}" aria-expanded="false" aria-controls="comments-${post.id}">
            Show comments
          </button>
          <div id="comment-${post.id}">
            <!-- Comments will be dynamically added here -->
          </div>
        </div>
        <i id="icon-${post.id}" style="font-size:18px" class="fa">&#xf08a;</i>
      </div>
    </div>
  </div>
`;

  const newDiv = document.createElement("div");
   newDiv.innerHTML = htmlPost;
   document.getElementById("postContainer").appendChild(newDiv);

   const iconElement = newDiv.querySelector(`#icon-${post.id}`);
    let isIconToggled = false;

    iconElement.addEventListener("click", function() {
    if (isIconToggled) {
      iconElement.className = "fa";
      iconElement.innerHTML = "&#xf08a;";
      isIconToggled = false;
    } else {
      iconElement.className = "fa";
      iconElement.innerHTML = "&#xf004;";
      isIconToggled = true;
    }
    });
  
   const elementsToHover = newDiv.querySelectorAll('a, img, i');
 
   elementsToHover.forEach((element) => {
     hoverMouse(element);})
     
  }

async function showComments(postId: number) {
  const commentsElement = document.getElementById(`comment-${postId}`)
  if (commentsElement !== null && !commentsElement.children.length){
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, { method: "GET" })
      const commentList = await res.json()
      commentList.forEach(createCommnet)
  } else  {
    if (commentsElement.classList.contains(`collapse`))
        commentsElement.classList.remove(`collapse`)
    else 
      commentsElement.classList.add('collapse')
  }
      
}

  
function createCommnet(comment: IComment) {
  const commentsElement = document.getElementById(`comment-${comment.postId}`)
  const newDiv = document.createElement("div")
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
  newDiv.innerHTML = htmlPost
  commentsElement.appendChild(newDiv)
}


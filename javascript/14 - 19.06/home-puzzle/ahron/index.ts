export { }
// class puzzle:

// Copy the blog-1 folder to your name:

// 1. Fetch and Display Post Titles

// a. Create a simple HTML page with an empty div that has the id postContainer.
// b. Use JavaScript to fetch data from https://jsonplaceholder.typicode.com/posts.
// c. Display the title of each post inside postContainer using h2 elements.


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

//------------------------------------------------------------------------------------------------------------------------------------------------------
// 1 //

/* Goal: add select user filter
1. V add html <select> with id of "selectUser"
2. V make list of user ids number[] from IPost[] without duplications
3. V build <option value="{userId}">User {userId}</optoin> dynamiclly from user ids list.
4. actvie the search filter and select user filter together.
 */

const postContainerElement = document.getElementById("postContainer")
const searchInputElement = document.getElementById("searchInput") as HTMLInputElement
const selectUserElement = document.getElementById("selectUser") as HTMLSelectElement

fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
    .then(res => res.json())
    .then((postList) => {

        const userIdList = userIdSearch(postList)
        userIdList.forEach(createOption)
        postList.forEach(createPost)
        
        searchInputElement.addEventListener(`input`, () => deletePostsAndActiveFilter(postList))
        selectUserElement.addEventListener(`change`, () => deletePostsAndActiveFilter(postList))
    })

function createPost(post) {
    const newDiv = document.createElement("div")
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
    newDiv.innerHTML = htmlPost

    postContainerElement.appendChild(newDiv)
}

// listener - every time keyboard up:
// 1. delete all posts
// 2. filter only posts you find the user input
// 3. deploy only filtered posts in the html

//  searchInputElement.addEventListener ==> deletePostsAndFindPostInput ==> searchInputElement.addEventListener
function deletePostsAndActiveFilter(postList) {

    const searchValue = searchInputElement.value.toLowerCase().trim() // שמירת הערך לתוך ערך חיפוש 
    const selectedUserId = selectUserElement.value;
    postContainerElement.innerHTML = "" // מחיקת כל הפוסטים מהעמד לאחר שהוא נכנס לתיבת לחיפוש

    const filtterPostForInput = postList.filter((postList: any) => {

        const isPostInSearch = isSearchInclude(postList, searchValue)
        const isUserInSearch = isUserFind(postList,selectedUserId) 
        

        return isPostInSearch && isUserInSearch 
    })
    filtterPostForInput.forEach(createPost)
}

//deletePostsAndActiveFilter ==> isSearchInclude ==> deletePostsAndActiveFilter
function isSearchInclude(postList, searchValue) {

    const valueOfSearch = Object.values(postList).toString().toLowerCase()//תפנה לערכים שתך הגייסון בכדי לבדוק אם הערך חיפוש מופיע בהם

    return valueOfSearch.includes(searchValue)
} 

function isUserFind(postList,selectedUserId) {
    if (selectedUserId === '0')
    return true
    return postList.userId.toString() === selectedUserId

}

// create function for map & create array of user Id 
function userIdSearch(postList){
    const userIdMap =postList.map(postList => postList.userId)
    
    const userIdList = Array.from(new Set(userIdMap))
    
    return userIdList
}

// create option for select user 
function createOption(userId: number) {
    const newOption = document.createElement('option')
    newOption.value = userId.toString()
    newOption.innerText = `User ${userId}`
    selectUserElement.appendChild(newOption)
}

//-----------------------------------------------------------------------------------------------------------
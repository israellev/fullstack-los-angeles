export { }

// https://getbootstrap.com/docs/5.0/getting-started/introduction/

// json is string that use in all internet and laguages 
console.log(JSON.stringify({ a: 1 })) // '{"a": 1}' - object to json
console.log(JSON.parse('{"a": 1}')) // {a: 1} - json to object

console.log(JSON.stringify([{ a: 1 }])) // '[{a: 1}]' - array to json
console.log(JSON.parse('[{"a": 1}]')) // [{a: 1}] - json to array


// @ts-ignore
document.getElementById("searchInput").value = localStorage.getItem("inputSearch")

/* Rest API - 
url = "https://jsonplaceholder.typicode.com/posts/1"
method = "GET" | "POST" | "PUT" | "DELETE"
headers = {}
*/

type IPost = {id: number, userId: number, title: string, body: string}

const postContainerElement = document.getElementById("postContainer")
const searchInputElement = document.getElementById("searchInput") as HTMLInputElement
const selectUserElement = document.getElementById("selectUser") as HTMLSelectElement


/* Goal: add select user filter
1. V add html <select> with id of "selectUser"
2. V make list of user ids number[] from IPost[] without duplications
3. V build <option value="{userId}">User {userId}</optoin> dynamiclly from user ids list.
4. V actvie the search filter and select user filter together.
 */

fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
    .then(res => res.json())
    .then((postList: IPost[]) => {
        
        const userIds = getUserIdsFromPostList(postList) // [1, 2, 3, ...]
        userIds.forEach(createOption)  // deploy 10 users <option>
        
        // check if exist in storage - add it to elements
        if (localStorage.getItem('searchValue'))
            searchInputElement.value = localStorage.getItem('searchValue')
        if (localStorage.getItem('selectedUserId'))
            selectUserElement.value = localStorage.getItem('selectedUserId')
        
        // show all posts (with the filters)
        deletePostsAndActiveFilter(postList)
        // postList.forEach(createPost)

        
        // listen to search and select 
        searchInputElement.addEventListener('keyup', () => deletePostsAndActiveFilter(postList))
        selectUserElement.addEventListener('change', () => deletePostsAndActiveFilter(postList))
    })
    .catch(error => console.log(error))


function getUserIdsFromPostList(postList: IPost[]): number[] {
    console.log("postList", postList)
    const allUserIds = postList.map(post => post.userId)
    console.log("allUserIds", allUserIds)
    const userIds = Array.from(new Set(allUserIds))
    console.log("userIds", userIds)
    return userIds
}
    

function createOption(userId: number) {
    const newOption = document.createElement('option')
    newOption.value = userId.toString()
    newOption.innerText = `User ${userId}`
    selectUserElement.appendChild(newOption)
}

function createPost(post: IPost) {
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


function deletePostsAndActiveFilter(postList: IPost[]) {
     // listener - every time search keyboard up or change select user:

    // get input and select option values:
    const searchValue = searchInputElement.value.toLowerCase().trim()
    localStorage.setItem("searchValue", searchValue)
    const selectedUserId = selectUserElement.value;
    localStorage.setItem("selectedUserId", selectedUserId)
    

    // 1. delete all posts
    postContainerElement.innerHTML = ""

    // 2. filter only posts you find the user input
    const filteredPostList = postList.filter((post: IPost) => {
        const isPostInSearch = isSearchIncludesInThePost(post, searchValue)
        const isPostInList = isPostInUserList(post, selectedUserId)
        return isPostInSearch && isPostInList
    })

    // 3. deploy only filtered posts
    filteredPostList.forEach(createPost)
}

function isSearchIncludesInThePost(post: IPost, searchValue: string): boolean {
    const values = Object.values(post) // [1, 1, "post title...", "post body..."]
    const valuesToString = values.toString().toLowerCase() // '1,1,post title...,post body...'
    return valuesToString.includes(searchValue)
}

function isPostInUserList(post: IPost, selectedUserId: string): boolean {
    if (selectedUserId === 'all-users')
        return true
    return post.userId.toString() === selectedUserId
}


localStorage.setItem("name", "Sarit Tzvika") // save in the storage
localStorage.getItem("name") // "Sarit Tzvika"
localStorage.removeItem("name")

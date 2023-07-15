export {}
// @ts-ignore

type IPost = {id: number, userId: number, title: string, body: string}
type IComment = {id: number, postId: number, name: string, email: string, body: string}


        const postContainerElement = document.getElementById("postContainer");
        const searchInputElement = document.getElementById("searchInput") as HTMLInputElement;
        const selectUserElement = document.getElementById("selectUser") as HTMLSelectElement;
        
   
        const imagesByUser = {
            1: "images/user1.jpg",
            2: "images/user2.jpg",
            3: "images/user3.jpg",
            4: "images/user4.jpg",
            5: "images/user5.jpg",
            6: "images/user6.jpg",
            7: "images/user7.jpg",
            8: "images/user8.jpg",
            9: "images/user9.jpg",
            10: "images/user10.jpg",
        }
init()//הרצת פונרמית איניט

        async function init() {//פונקצית איניט המחליפה את פטץ' מאחר וככה יותר נקי לקרוא לפקודות פרומיס
            // async await (in Promise functions)
            const res = await fetch("/posts", { method: "GET" })
            const postList = await res.json()
        
            // deploy 10 users <option>
            const userIds = getUserIdsFromPostList(postList) // [1, 2, 3, ...]
            userIds.forEach(createOption)
            postList.forEach(showComments)
            
            // check if exist in storage - add it to elements
            if (localStorage.getItem('searchValue'))
                searchInputElement.value = localStorage.getItem('searchValue')
            if (localStorage.getItem('selectedUserId'))
                selectUserElement.value = localStorage.getItem('selectedUserId')
            
            // show all posts (with the filters)
            deletePostsAndActiveFilter(postList)
            // postList.forEach(createPost) // show all 100 posts (without filter)
        
            // listen to search and select 
            searchInputElement.addEventListener('keyup', () => deletePostsAndActiveFilter(postList))
            selectUserElement.addEventListener('change', () => deletePostsAndActiveFilter(postList))
            return true
        }


// fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
//     .then(res => res.json())//התגובה הראשונה מהאיי פי איי מגיעה בפורמט גולמי אז השימוש בדן הראשוני נועדה כדי להמיר את התגובה לפורמט גייסון בשימוש רס.גייסו
//     .then((postList: IPost[]) => {//הדן השני מקבל את הקובץ גייסון המנותח שצפוי להיות מערך אובייקטים של פוסטים ומקבל פונקצית קולבק פוראיץ
        

//     })
//     .catch(error => console.log(error))

    

    function getUserIdsFromPostList(postList: IPost[]): number[]{//פונקציה אשר תקבל מערך של היוזרים המסוננים ללא כפילויות
        const userIds = Array.from(new Set(postList.map((post)=> post.userId)))
        return userIds;
          
      }

    function createOption(userId:number){
        const newOption = document.createElement('option')//יצירה אלמנט אייץ טי מל חדש לוקלית בתוך הפונקציה ועוד לא בדף בשם אופציה 
        newOption.value = userId.toString()//הערך של אותה אופציה חדשה שנוצרה יהיה תז של יוזר שיהפוך לסטרינג 
        newOption.innerText= `user ${userId}`//הטקסט של אותה אופציה יהי יוזר והמספר של אותו יוזר 
        selectUserElement.appendChild(newOption)//לאלמנט סלקט יוזר תוסיף ילד  בעצם מה שיופיע בדף זה מה שנוצר למעלה במשתנה אופציה חדשה 
    }
      


    function createPost(post) {//The createPost function takes a post object as a parameter.
        const newDiv = document.createElement("div")// It generates HTML markup representing the post's data and creates a new div element.
        const image = addImageByUser(post.userId);//// Get the image URL based on the user ID
         const htmlPost = `
                <div class="card mb-4" id="post-${post.id}">
                    <div class="card-header">
                        <h5 class="card-title">${post.id} - ${post.title}</h5>
                        <small class="text-muted">Posted by User ${post.userId}</small>
                    </div>
                    <div class="card-body">
                    <div class="row">
                      <div class="col-3">
                        <a href="profileUser.html" target="_blank">
                          <img src=${image} style="width: 100px; height: 100px; object-fit: cover; object-position: center; border-radius: 50%; cursor: pointer;" alt="Profile Image user number ${post.id}">
                        </a>
                      </div>
                      <div class="col-9">
                    <div class="card-body">
                        <p class="card-text">${post.body}</p>
                        <button onClick = "showComments(${post.id})" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#comments-1" aria-expanded="false" aria-controls="comments-1">  
                        Show comments
                        </button>
                        <div id="comments-${post.id}">
                        <!-- Comments will be dynamically added here -->
                        </div>
                    </div>
                </div>
                `;
            newDiv.innerHTML = htmlPost;
            document.getElementById("postContainer").appendChild(newDiv)

            const imageElement = newDiv.querySelector('a,img');
            hoverMouse(imageElement);
        }
        
        // The HTML markup is assigned to the innerHTML property of the div element.
        // Finally, the div element is appended to the postContainer element in the document.
        //בכפתור הוספנו אירוע לחיצת כפתור אשר יפעיל לנו את הפונקציה showComments
    
    function addImageByUser(userId) {
            if (userId in imagesByUser) {
              return imagesByUser[userId];
            } } 
    
    function hoverMouse(element) {
             element.addEventListener('mouseover', () => {
                 element.style.cursor = 'pointer';
            });  
            }

    function deletePostsAndActiveFilter(postList: IPost[]) {// listener - every time search keyboard up or change select user:
       // get input and select option values:
       const searchValue = searchInputElement.value.toLowerCase().trim().replace(/[<>]/g, '')
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
       return valuesToString.includes(searchValue.toLowerCase())
   }
   
   function isPostInUserList(post: IPost, selectedUserId: string): boolean {
       if (selectedUserId === '0')
           return true
       return post.userId.toString() === selectedUserId
   }


   async function showComments(postId: number) {
    const commentsElement = document.getElementById(`comments-${postId}`)
    if (!commentsElement.children.length){
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
    const commentsElement = document.getElementById(`comments-${comment.postId}`)
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
  


  
  
  
  
  
  
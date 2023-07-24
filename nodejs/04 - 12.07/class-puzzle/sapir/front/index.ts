export {}
// @ts-ignore

type IPost = {_id: number, userId: number, title: string, body: string}
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
            
            // show all posts 
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

    
    // Fetch user IDs from post list
    function getUserIdsFromPostList(postList: IPost[]): number[]{//פונקציה אשר תקבל מערך של היוזרים המסוננים ללא כפילויות
        const userIds = Array.from(new Set(postList.map((post)=> post.userId)))
        return userIds;
          
      }

    // Create select options for user IDs
    function createOption(userId:number){
        const newOption = document.createElement('option')//יצירה אלמנט אייץ טי מל חדש לוקלית בתוך הפונקציה ועוד לא בדף בשם אופציה 
        newOption.value = userId.toString()//הערך של אותה אופציה חדשה שנוצרה יהיה תז של יוזר שיהפוך לסטרינג 
        newOption.innerText= `user ${userId}`//הטקסט של אותה אופציה יהי יוזר והמספר של אותו יוזר 
        selectUserElement.appendChild(newOption)//לאלמנט סלקט יוזר תוסיף ילד  בעצם מה שיופיע בדף זה מה שנוצר למעלה במשתנה אופציה חדשה 
    }
      

    // Create a single post element
    function createPost(post: IPost, index: number) {//The createPost function takes a post object as a parameter.
        const newDiv = document.createElement("div")// It generates HTML markup representing the post's data and creates a new div element.
        const image = addImageByUser(post.userId);//// Get the image URL based on the user ID
         const htmlPost = `
         <div class="card mb-4" id="post-${post._id}">
           <div class="card-header">
             <h5 class="card-title">${index + 1} - ${post.title}</h5>
             <small class="text-muted">Posted by User ${post.userId}</small>
           </div>
           <div class="card-body">
             <div class="row">
               <div class="col-3">
                 <a href="profileUser.html" target="_blank">
                   <img src=${image} style="width: 100px; height: 100px; object-fit: cover; object-position: center; border-radius: 50%; cursor: pointer;" alt="Profile Image user number ${post._id}">
                 </a>
               </div>
               <div class="col-9">
                 <div class="card-body">
                   <p class="card-text">${post.body}</p>
                   <div class="add-comment">
                     <input type="text" name="name" placeholder="Your Name" required><br>
                     <input type="email" name="email" placeholder="Your Email" required><br>
                     <textarea name="body" placeholder="Your Comment" required></textarea><br>
                     <button type="submit" class="btn btn-primary add-comment-button">Add Comment</button>
                   </div>
                   <button onClick="showComments('${index + 1}')" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#comments-${post._id}" aria-expanded="false" aria-controls="comments-${post._id}">
                     Show comments
                   </button>
                   <div id="comments-${post._id}">
                     <!-- Comments will be dynamically added here -->
                   </div>
                   <div class="delete-icon" style="cursor: pointer; position: absolute; top: 10px; right: 10px;">
                     <i class="fas fa-trash" onClick="deletePost('${post._id}')"></i>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       `;
            newDiv.innerHTML = htmlPost;
            document.getElementById("postContainer").appendChild(newDiv)

            const imageElement = newDiv.querySelector('a,img');
            hoverMouse(imageElement);

            // Add event listener for the "Add Comment" button
            const addCommentButton = newDiv.querySelector(".btn-primary");
            addCommentButton.addEventListener("click", () => addComment(post._id));
  

           // Add event listener for the "Show Comments" button
           const showCommentsButton = newDiv.querySelector(".btn-primary[data-bs-toggle='collapse']");
           showCommentsButton.addEventListener("click", () => showComments(post._id));
}
      

        
        // The HTML markup is assigned to the innerHTML property of the div element.
        // Finally, the div element is appended to the postContainer element in the document.
        //בכפתור הוספנו אירוע לחיצת כפתור אשר יפעיל לנו את הפונקציה showComments
    
    async function deletePost(postId: number){
           const res = await fetch(`/posts/${postId}`, {method: "DELETE",})
           const deletedPost = await res.json()
           console.log(deletedPost)
           if (deletedPost){
            document.getElementById(`post-${postId}`).remove();
           }
        }

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

//יש בעיה בפונקמיה הזו לבדוק מהי 
  //  async function showComments(postId: number) {
  //   const commentsElement = document.getElementById(`comments-${postId}`)
  //   if (commentsElement.children.length){
  //       const res = await fetch(`/posts/${postId}/comments`, { method: "GET" })//לבדוק אם זה נכון 
  //       const commentList = await res.json()
  //       commentList.forEach((comment) => createCommentElement(postId, comment));
  //   } else  {
  //     if (commentsElement.classList.contains(`collapse`))
  //         commentsElement.classList.remove(`collapse`)
  //     else 
  //       commentsElement.classList.add('collapse')
  //   }
        
  // }

  async function showComments(postId: number) {
    const commentsElement = document.getElementById(`comments-${postId}`);
  
    // Fetch and create comments
    const res = await fetch(`/posts/${postId}/comments`, { method: "GET" });
    const commentList = await res.json();
    commentList.forEach((comment) => createCommentElement(postId, comment));
  
    // Toggle the "collapse" class using standard JavaScript DOM methods
    if (commentsElement.classList.contains("collapse")) {
      commentsElement.classList.remove("collapse");
    } else {
      commentsElement.classList.add("collapse");
    }
  }
  
  
    
// Function to create a single comment element with postId
function createCommentElement(postId, comment) {
    const commentsElement = document.getElementById(`comments-${postId}`);
    const newDiv = document.createElement("div");
    newDiv.id = `comment-${comment.id}`;
    newDiv.classList.add("card", "card-body", "mb-2");
  
    newDiv.innerHTML = `
      <h6>Comments:</h6>
      <div class="comment">
        <strong>Name: </strong>${comment.name}<br>
        <strong>Email: </strong>${comment.email}<br>
        <strong>Comment: </strong>${comment.body}
        <div class="delete-icon" style="cursor: pointer; position: absolute; top: 10px; right: 10px;">
          <i class="fas fa-trash" onClick="deleteComment(${comment.id})"></i>
        </div>
      </div>
    `;
  
    commentsElement.appendChild(newDiv);
  
    // Add the delete-icon event listener to the comment element
    const deleteIcon = newDiv.querySelector(".delete-icon");
    deleteIcon.addEventListener("click", () => deleteComment(comment.id));
  }




   // Function to delete a comment
   async function deleteComment(commentId) {
    try {
      const res = await fetch(`/comments/${commentId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const deletedComment = await res.json();
        // Remove the comment element from the DOM
        const commentElement = document.getElementById(`comment-${deletedComment.id}`);
        if (commentElement) {
          commentElement.remove();
        } else {
          console.log(`Comment element with ID ${deletedComment.id} not found.`);
        }
      } else {
        console.error("Error deleting comment.");
      }
    } catch (error) {
      console.error("Error deleting comment", error);
    }
  }

  type Isubmit = {userId: number, title:string, body:string, image:File }
  interface ISubmitEvent extends Event {
    target: HTMLFormElement;
  }
  

  async function addComment(postId: number) {
    const nameInput = document.querySelector(`#post-${postId} input[name="name"]`) as HTMLInputElement;
    const emailInput = document.querySelector(`#post-${postId} input[name="email"]`) as HTMLInputElement;
    const bodyInput = document.querySelector(`#post-${postId} textarea[name="body"]`) as HTMLTextAreaElement;
  
    const commentData = {
      postId,
      name: nameInput.value,
      email: emailInput.value,
      body: bodyInput.value,
    };
  
    try {
      const res = await fetch("/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });
  
      if (res.ok) {
        const newComment = await res.json();
        // Create and append the new comment element
        createCommentElement(postId, newComment);
        // Clear the input fields after adding the comment
        nameInput.value = "";
        emailInput.value = "";
        bodyInput.value = "";
      } else {
        console.error("Error adding comment.");
      }
    } catch (error) {
      console.error("Error adding comment", error);
    }
  }
  
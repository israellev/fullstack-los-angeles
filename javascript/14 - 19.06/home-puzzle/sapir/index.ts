export {}
// @ts-ignore

type IPost = {id: number, userId: number, title: string, body: string}
type IComment = {id: number, postId: number, name: string, email: string, body: string}


        const postContainerElement = document.getElementById("postContainer")
        const searchInputElement = document.getElementById("searchInput") as HTMLInputElement
        const selectUserElement = document.getElementById("selectUser") as HTMLSelectElement
                
fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
    .then(res => res.json())//התגובה הראשונה מהאיי פי איי מגיעה בפורמט גולמי אז השימוש בדן הראשוני נועדה כדי להמיר את התגובה לפורמט גייסון בשימוש רס.גייסו
    .then((postList: IPost[]) => {//הדן השני מקבל את הקובץ גייסון המנותח שצפוי להיות מערך אובייקטים של פוסטים ומקבל פונקצית קולבק פוראיץ
        const userIds = getUserIdsFromPostLis(postList)//הפעלת הפונקציה 
        userIds.forEach(createOption)// הפעלת הפונקציה בלולאה כך שנקבל את כל היוזרים ולכל יוזר יווצר טקסט יוזר ומספר 

       // postList.forEach(createPost) //לולאה שתעבור על כל אובייקט פוסט במערך  ניתן לראות מטה מה הפונקציה עושה כולל הסבר 


            // show all posts (with the filters)
        deletePostsAndActiveFilter(postList)

        searchInputElement.addEventListener('keyup',()=> deletePostsAndActiveFilter(postList))
        selectUserElement.addEventListener('change', ()=> deletePostsAndActiveFilter(postList))
        return true;

    })
    .catch(error => console.log(error))



    function getUserIdsFromPostLis(postList: IPost[]): number[]{//פונקציה אשר תקבל מערך של היוזרים המסוננים ללא כפילויות
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
            document.getElementById("postContainer").appendChild(newDiv)
        }
        
        // The HTML markup is assigned to the innerHTML property of the div element.
        // Finally, the div element is appended to the postContainer element in the document.
        
        

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
       return valuesToString.includes(searchValue)
   }
   
   function isPostInUserList(post: IPost, selectedUserId: string): boolean {
       if (selectedUserId === '0')
           return true
       return post.userId.toString() === selectedUserId
   }


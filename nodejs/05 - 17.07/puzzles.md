class follow up:

1. add icon of add new post - fontawsome
2. wrap the icon with <a href="/create-post"> endpoinst
3. add file of front/create-post.html
4. add endpoint /create-post in the server that sends back the create-post.html file 
5. add form of creating the post into the file - userId, title, body, image. 
6. add function onsubmit that sends POST to /posts with FormData in the body
7. in the server posts router add code that get the image and save it into '/front/images' folder
8. return reponse to the user with 'imageUrl' of '/images/[filename]'
9. in index.html ceactePost use in that image url.
10. all should be beautifull!!

Add delete post:
1. add icon of trash in the right top of the post
2. onclick will call function of deletePost(postId)
3. implement DELETE /posts/:id
4. remove the post in the UI


home puzzle:
Do all the follow ups


Bonus:

Implement comments yourself
1. do the Postman
2. build new router of /comments
3. implement all the methods
4. implement the UI and connect with the backend
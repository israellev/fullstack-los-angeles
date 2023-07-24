const mongoose = require ('mongoose')

const postSchema = new mongoose.Schema({//תיאור איך יראה הדאטא שלנו
    title: String,
    body: String,
    userId: Number,
    ImageUrl: String,
})

const postModel = mongoose.model('post', postSchema)

class postService {

    async createPost (post){
        const newPost = new postModel(post)
        return await newPost.save()
    }

    async getAllPosts(){
        return await postModel.find()
    }

    async getPost(postId) {
        return await postModel.findOne({_id: postId})
    }

    async findPostsByTitle(search) {
        const regex = new RegExp(search, 'i');
        return await postModel.find({title: regex})
    }

    async updatePostTitle(postId, newTitle) {
        const post = await this.getPost(postId)
        if (post) {
            post.title = newTitle
            return await post.save()
        }
        console.log('post is not exists for update')
    }

    async deletePost(postId) {
        const post = await this.getPost(postId)
        if (post)
            return await post.deleteOne()
        else
            console.log('Post is not exists for delete')
    }
}

const postsService = new postService()
module.exports = postsService
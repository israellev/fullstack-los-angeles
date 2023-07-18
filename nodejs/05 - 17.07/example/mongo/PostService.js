const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    userId: Number,
    title: String,
    body: String,
    imageUrl: String,
})

const PostModel = mongoose.model('Post', PostSchema)

class PostService {

    async createPost(post) {
        const newPost = PostModel(post)
        await newPost.save()
        console.log(newPost)
        return newPost
    }

    async getAllPosts() {
        return await PostModel.find()
    }
    
    async getPost(postId) {
        return await PostModel.findOne({_id: postId})
    }

    async findPostsByTitle(search) {
        const regex = new RegExp(search, 'i');
        return await PostModel.find({title: regex})
    }

    async deletePost(postId) {
        const post = await this.getPost(postId)
        return await post.deleteOne()
    }

}

const postService = new PostService()
module.exports = postService
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
        const newPost = new PostModel(post)
        return await newPost.save()
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

const postMongo = new PostService()
module.exports = postMongo
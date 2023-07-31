const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userId: Number,
    title: String,
    body: String,
    //image: String,
    image: {
        data: Buffer,
        contentType: String
    }
})

const postModel = mongoose.model('Post', postSchema)

class PostService {
    async createPost(post) {
        const newPost = new postModel(post)
        return await newPost.save()
    }

    async getAllPosts() {
        return await postModel.find()
    }

    async getpost(postId) {
        return await postModel.findOne({_id: postId})
    }

    async findPostsByTitle(search) {
        const regex = new RegExp(search, 'i');
        return await PostModel.find({title: regex})
    }

    async getNewPostTitle(postId, newTitle) {
        const post = this.getpost(postId)
        if (post) {
            post.title = newTitle
            return await post.save 
        }
        console.log('post is not exists for update')
    }

    async deletePost(postId) {
        const post = this.getpost(postId)
        if(post)
        return await post.deleteOne()
        else
        console.log('post is not exist to delete')
    }
}


const postService = new PostService()
module.exports = postService
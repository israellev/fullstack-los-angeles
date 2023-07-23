class follow up:

1. Deploy to Google app engine 

go to google cloud app engine and follow the instructions:
https://cloud.google.com/appengine/docs/standard/nodejs/building-app

a. create google cloud porject
b. https://console.cloud.google.com/flows/enableapi?apiid=cloudbuild.googleapis.com
c. install the gcloud cli - https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe
d. after computer restart run 'gcloud init' and chose 1, then login ..
e. open app engine and chose regon-  https://console.cloud.google.com/appengine/create?lang=nodejs
f. add app.yaml file, and write there 'runtime: nodejs18'
g. make sure you have this in your package.json file:
"scripts": {
  "start": "node server.js"
}
h. change in your server.js:
const post = process.env.PORT || 3000;
i. 'gcloud app deploy'
and i'll deploy it, and give you the link
j. if you want to see the logs, go here - https://console.cloud.google.com/logs/query


2. save image it-self in mongodb server
  a.
  // destination: function (req, file, cb) {
  //   cb(null, 'front/images'); // Specify the destination path
  // },
b. 
router.post('/', upload.single('image'), async (req, res) => {
  const newPost = await PostService.createPost({
    ...req.body,
    userId: +req.body.userId,
    image: req.file,
    // imageUrl: `/images/${req.file.filename}`,
  })
  res.send(newPost)
});

c.
const PostSchema = new mongoose.Schema({
    userId: Number,
    title: String,
    body: String,
    // imageUrl: String,
    image: {
        data: Buffer,
        contentType: String
    }
})
d. 

    async createPost(post) {
        const newPost = new PostModel({
            ...post,
            image: {
                data: fs.readFileSync(post.image.path),
                contentType: post.image.mimetype
            }
        })
        const postSaved = await newPost.save()
        return postSaved
    }

    

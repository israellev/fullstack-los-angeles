// connect to database
const { MongoClient, ObjectId } = require('mongodb');

console.log("---------------------------------------------------")
console.log(process.env.MONGO_URI)

class Mongodb {
    client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    database = this.client.db("test");

    constructor() {
        try {
            this.client.connect().then(() => console.log('Connected to MongoDB!'));
        } catch (e) {
            console.error(e);
        }
    }

    async getProdctList() {
        const collection = this.database.collection("products");
        const productList = await collection.find().toArray();
        return productList
    }
    
    async getProdct(id) {
        const collection = this.database.collection("products");
        const prduct = await collection.findOne({_id: new ObjectId(id)});
        return prduct
    }
    
    async deleteProdct(id) {
        const collection = this.database.collection("products");
        const deletedProduct = await this.getProdct(id)
        await collection.deleteOne({_id: new ObjectId(deletedProduct._id)});
        return deletedProduct
    }
    
    async addNewProdct(product) {
        try {
            const collection = this.database.collection("products");
            const newProduct = await collection.insertOne(product)
            return this.getProdct(newProduct.insertedId)
        } catch(e) {
            console.error(e)
            throw e
        }
    }
}

const mongodb = new Mongodb()

module.exports = {mongodb}
const { getStorage } = require('firebase-admin/storage');
const { firebaseApp } = require('./firebase');

class Storage {
    storage = getStorage(firebaseApp);

    async uploadFile(fileName, buffer) {
        const bucket = this.storage.bucket();
        // const blob = new Blob([file.buffer], { type: file.mimetype });
        const fileRef = bucket.file(`store/products/${fileName}`);
        try {
            await fileRef.save(buffer);
            await fileRef.makePublic()
            console.log(`${fileName} uploaded successfully.`);
            const link = fileRef.publicUrl();
            console.log(link);
            return link
        } catch(e) {
            console.error(e);
            throw e; 
        }
    }
}
const storage = new Storage();

module.exports = {storage}


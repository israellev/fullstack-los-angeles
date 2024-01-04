import { getStorage, ref, uploadBytes } from "firebase/storage";
import { firebaseApp } from "./firebase";

export class Storage {
    private storage = getStorage(firebaseApp);
    
    async uploadFile(fileName: string, file: Blob | Uint8Array | ArrayBuffer) {
        const storageRef = ref(this.storage, `store/products/${fileName}`);
        try {
            const snapshot = await uploadBytes(storageRef, file)
            console.log(snapshot, 'Uploaded a blob or file!');
            return snapshot.ref.fullPath
        } catch(e) {
            console.error(e)
        }
    }
}

export const storage = new Storage()

import {useState , useEffect, useContext} from 'react';
import { FirebaseContext, withFirebase,firestore } from "../firebase";


const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);
    const firebase = useContext(FirebaseContext);
   
    useEffect(()=>{
        const projectStorage = firebase.files;
        const projectFireStore = firebase.db; 
        const timestamp = firebase.firestore.FieldValue.serverTimestamp;

        const collectionRef = projectFireStore.collection('images');
        
        const storageRef = projectStorage.ref(file.name);
        
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
          }, (err) => {
            setError(err);
          }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({ url, createdAt });
            setUrl(url);
          });
        }, [file]);
      


    return {progress , url ,error}


}

export default (useStorage);
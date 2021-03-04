import {useState , useEffect, useContext} from 'react';
import {FirebaseContext,withFirebase} from '../firebase';

const useFirestore = (collection) => {
    const [docs,setDocs] = useState([]);
    const firebase = useContext(FirebaseContext);

    useEffect(()=> {
        const projectFireStore = firebase.db
        const unsub = projectFireStore.collection(collection)
        .orderBy('createAt','desc')
        .onSnapshot((snap)=> {
            let document = [];
            snap.forEach(doc=> {
                document.push({...doc.data(),id: doc.id});
            });
            setDocs(document);
        });

        return () => unsub();

    },[collection])
    return {docs} ;

}

export default useFirestore ;

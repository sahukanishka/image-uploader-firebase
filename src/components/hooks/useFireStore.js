import {useState,useEffect} from 'react';
import {projectFireStore} from '../firebase/config';

const useFirestore = (collection) => {
    const [docs,setDocs] = useEffect([]);

    useEffect(()=> {
        const unsub = projectFireStore.collection(collection)
        .orderBy('createAt','desc')
        .onSnapshot((snap)=> {
            let document = [];
            snap.forEach(doc=> {
                document.push({...doc.data(),id: doc.id});
            });
            setDocs(document);
        });

    },[collection])
    return {docs} ;

}

import app from 'firebase/app';
import 'firebase/auth';
import "firebase/storage"
import "firebase/firestore"




const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };


class Firebase {
     

      constructor(){
          app.initializeApp(config);
          this.auth = app.auth(); 
          this.db = app.firestore()
          this.firestore = app.firestore
          this.files = app.storage()
        
  
      }
      
      //auth api 


      doCreateUserWithEmailAndPassword = (email,password) => 
        this.auth.createUserWithEmailAndPassword(email,password);

      doSignInWithEmailAndPassword = (email,password) => 
        this.auth.signInWithEmailAndPassword(email,password);

      doSignOut = () => this.auth.signOut();
      
      doPasswordReset = (email) => 
        this.auth.sendPasswordResetEmail(email);
        
      doPasswordUpdate = (password) => 
        this.auth.currentUser.updatePassword(password);

      doSaveData = (file) => 
        this.auth.files.ref(file.name);
      
    
  }


export default Firebase ;













































// import firebase from 'firebase/app';
// import 'firebase/auth';
// import "firebase/storage"
// import "firebase/firestore"




// const config = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   };



     

//       // constructor(){
         
//       //     this.auth = app.auth(); 
//       //     this.db = app.firestore()
//       //     this.firestore = app.firestore
//       //     this.files = app.storage()

          
//       // }

//       firebase.initializeApp(config);
      
//       //auth api 
//       const db = firebase.database();
//       const auth = firebase.auth();
//       const projectStorage = firebase.storage();



//         export const doCreateUserWithEmailAndPassword = (email,password) => 
//         auth.createUserWithEmailAndPassword(email,password);

//         export const doSignInWithEmailAndPassword = (email,password) => 
//         auth.signInWithEmailAndPassword(email,password);

//         export const doSignOut = () => this.auth.signOut();
      
//         export const doPasswordReset = (email) => 
//         auth.sendPasswordResetEmail(email);
        
//         export const doPasswordUpdate = (password) => 
//         this.auth.currentUser.updatePassword(password);

//         export const doSaveData = (file) => 
//         this.files.ref(file.name);
      
    


// export { db, auth, projectStorage };








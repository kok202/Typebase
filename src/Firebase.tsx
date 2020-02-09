import FirebaseConfig from './FirebaseConfig'
import firebaseApp from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

class Firebase{
    private firestore : firebase.firestore.Firestore;
    private auth : firebase.auth.Auth
    
    constructor(){
        firebaseApp.initializeApp(FirebaseConfig);
        this.firestore = firebaseApp.firestore();
        this.auth = firebaseApp.auth();
    }

    public signInWithGoogle = () : Promise<firebase.auth.UserCredential>=> {
        let authProvider = new firebaseApp.auth.GoogleAuthProvider();
        let authPopup = this.auth.signInWithPopup(authProvider);
        return authPopup;
    }

    public getFirestore() : firebase.firestore.Firestore {
        return this.firestore;
    }

    public getAuth() : firebase.auth.Auth {
        return this.auth;
    }

    public isLogined() : boolean {
        return this.auth.currentUser != null;
    }
}

const firebase = new Firebase();
export default firebase;
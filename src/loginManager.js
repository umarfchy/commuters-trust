import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'

export const initLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const { name, email, picture } = result.additionalUserInfo.profile;
            const newUser = {
                isSignedIn: true,
                name: name,
                email: email
            }
            return newUser
        }).catch((error) => {
            console.log('This is the log of error:\n\n' + error);
        });
}

export const handleEmailSignUp = (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            return userCredential;
        })
        .catch((error) => {
            console.log('Error during saving credential: ', error);
        });
}

export const handleEmailLogin = (email, password)=>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    return userCredential;
  })
  .catch((error) => {
      console.log(error);
  });
}


export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(() => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: ''
            }

            return signedOutUser;

        }).catch((error) => {
            console.log(error);
        });
}

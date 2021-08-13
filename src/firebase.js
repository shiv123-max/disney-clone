import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAI3Zvlz0gUuYjJVAhzoBxQ3GrqaaXKmtM",
    authDomain: "disney-clone-a51f0.firebaseapp.com",
    projectId: "disney-clone-a51f0",
    storageBucket: "disney-clone-a51f0.appspot.com",
    messagingSenderId: "264220612139",
    appId: "1:264220612139:web:2b3200caa02a81c07f3c6e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth,provider,storage };
export default db;


import firebase from 'firebase';

  // Initialize Firebase
var config = {
apiKey: "AIzaSyCemsB9tyrjR-_eu7uItQsz7n--uki6kNE",
authDomain: "vuepwa-1d729.firebaseapp.com",
databaseURL: "https://vuepwa-1d729.firebaseio.com",
projectId: "vuepwa-1d729",
storageBucket: "vuepwa-1d729.appspot.com",
messagingSenderId: "87341388005"
};
firebase.initializeApp(config);

//get firebase database instance
const database = firebase.database();
const storage = firebase.storage();

export {
    database,
    storage
}
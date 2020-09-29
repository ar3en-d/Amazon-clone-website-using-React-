import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyA7zZFN3LYfSytORa7CHeqw4UZtCsG6eaY",
    authDomain: "clone-react-6d64b.firebaseapp.com",
    databaseURL: "https://clone-react-6d64b.firebaseio.com",
    projectId: "clone-react-6d64b",
    storageBucket: "clone-react-6d64b.appspot.com",
    messagingSenderId: "942502019743",
    appId: "1:942502019743:web:ce40de166472da876fd8aa",
    measurementId: "G-L0HB94H113"

});


const auth = firebase.auth();

export { auth }; 
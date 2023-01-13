import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyAl1MLkBnFZLGFT1rv64uRn_EqM4YU87UM",
    authDomain: "quizapp-6b9f1.firebaseapp.com",
    projectId: "quizapp-6b9f1",
    storageBucket: "quizapp-6b9f1.appspot.com",
    messagingSenderId: "895356702071",
    appId: "1:895356702071:web:7f059a72b933d0bb7a6572"
};
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth()

export default firebase;
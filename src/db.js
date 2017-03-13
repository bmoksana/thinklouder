import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA0kE4u26LNCIv8Fkm8AQmJvrXAavT2YAU",
  authDomain: "thinkloder.firebaseapp.com",
  databaseURL: "https://thinkloder.firebaseio.com",
  storageBucket: "thinkloder.appspot.com",
  messagingSenderId: "104401888595"
};

export const fb = firebase.initializeApp(config);
export const db = fb.database().ref();
export const firebaseGoogle = new firebase.auth.GoogleAuthProvider();

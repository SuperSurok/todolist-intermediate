import  firebase from 'firebase/app';

const firebaseConfig = firebase.initializeApp({
   apiKey: "AIzaSyD6P8CzxohnQ0OKRijTUIRoNf8x0Dc4_pk",
   authDomain: "todolist-intermediate.firebaseapp.com",
   databaseURL: "https://todolist-intermediate.firebaseio.com",
   projectId: "todolist-intermediate",
   storageBucket: "todolist-intermediate.appspot.com",
   messagingSenderId: "1069462039164",
   appId: "1:1069462039164:web:3a399d3513e6d7095937f9" 
});

export {firebaseConfig as firebase};

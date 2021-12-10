//firebase-messaging-sw.js

import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken } from "firebase/messaging";

var firebaseConfig = {
    apiKey: "AIzaSyC6kHo7oWO-lz5wAT9lWUwnR5mmnr2S85I",
    authDomain: "test-pwa-92c65.firebaseapp.com",
    projectId: "test-pwa-92c65",
    storageBucket: "test-pwa-92c65.appspot.com",
    messagingSenderId: "715873294959",
    appId: "1:715873294959:web:c042e31555cec6685b0b9a",
    measurementId: "${config.measurementId}"
};

initializeApp(firebaseConfig);

console.log('starLog firebase-messaging-sw', );

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
// const messaging = getMessaging();
// getToken(messaging, { vapidKey: 'BN6GgoTcHSXIUnyLO7W6s8DgTEAs78NhZEzUui9UFMEZ1feZom5YKelQWLA-xT5Zre-YwywmJ4oaBUi0ooztt9Q' }).then((currentToken) => {
//   if (currentToken) {
//     console.log('starLog currentToken', currentToken);
    
//   } else {
//     // Show permission request UI
//     console.log('No registration token available. Request permission to generate one.');
//     // ...
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
//   // ...
// });
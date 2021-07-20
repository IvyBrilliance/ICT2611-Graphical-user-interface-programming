import firebase from 'firebase';
import 'firebase/storage';

export const app = firebase.initializeApp({
  "projectId": "economistblog",
  "appId": "1:938968765672:web:6d0b24d479dc206431a55d",
  "storageBucket": "economistblog.appspot.com",
  "locationId": "europe-west",
  "apiKey": "AIzaSyCSCz-eZzCbqssoh0lFxyZ3DzXIDvZWYZE",
  "authDomain": "economistblog.firebaseapp.com",
  "messagingSenderId": "938968765672"
});


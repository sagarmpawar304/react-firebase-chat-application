import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAWjBh4z9bYJ3Vc4N8KsCpwfkmV2j9G3I8',
  authDomain: 'react-firebase-app-901a7.firebaseapp.com',
  databaseURL:
    'https://react-firebase-app-901a7-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-firebase-app-901a7',
  storageBucket: 'react-firebase-app-901a7.appspot.com',
  messagingSenderId: '575990615155',
  appId: '1:575990615155:web:803e7a954e708d3fab6e06',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

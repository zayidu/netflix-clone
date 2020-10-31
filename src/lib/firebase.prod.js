import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDp7KxOxikESs0TlRXIQpWpT5itCb5z_Y0',
  authDomain: 'netflix-zayidu.firebaseapp.com',
  databaseURL: 'https://netflix-zayidu.firebaseio.com',
  projectId: 'netflix-zayidu',
  storageBucket: 'netflix-zayidu.appspot.com',
  messagingSenderId: '210886919196',
  appId: '1:210886919196:web:cd1d62a77c0cbe8b8f0bd9',
  measurementId: 'G-BV74JC4REH',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };

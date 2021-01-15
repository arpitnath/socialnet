import firebase from 'firebase';
import { firebaseAPI } from './config';

const firebaseConfig = {
	apiKey: firebaseAPI,
	authDomain: 'socialnetpp.firebaseapp.com',
	projectId: 'socialnetpp',
	storageBucket: 'socialnetpp.appspot.com',
	messagingSenderId: '1054491788330',
	appId: '1:1054491788330:web:cefaa466d6188b60a06f53',
};

/**
 * @Connect_Firebase
 */

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

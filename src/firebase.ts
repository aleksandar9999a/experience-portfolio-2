import firebase from 'firebase/app';
import { firebaseConfig } from './config/firebase_config';
import 'firebase/firestore';
import 'firebase/storage';
import "@firebase/auth";
import ReduxSagaFirebase from 'redux-saga-firebase'

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const rsf = new ReduxSagaFirebase(firebaseApp);
export const firestore = rsf.firestore;
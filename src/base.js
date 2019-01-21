import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "your api key",
    authDomain: "your app domain",
    databaseURL: "your database url",
   
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

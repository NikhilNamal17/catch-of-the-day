import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZq9KhVeJeip0zH6A18dWC7tkpm36aWqc",
    authDomain: "catch-of-the-day-nikhil-namal.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-nikhil-namal.firebaseio.com",
   
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
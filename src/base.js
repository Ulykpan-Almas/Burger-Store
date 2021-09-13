import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCdHWtHwDEmX8qV3rCfnYhH18xwUGaayvU",
    authDomain: "burgers-28429.firebaseapp.com",
    databaseURL: "https://burgers-28429-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export {firebaseApp}
export default base
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB2qF6BEYGZCezpHJm1WJWstmmCJps05ew',
  authDomain: 'react-stbase.firebaseapp.com',
  projectId: 'react-stbase',
  storageBucket: 'react-stbase.appspot.com',
  messagingSenderId: '975531249754',
  appId: '1:975531249754:web:14592a9535e14ed0604863',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase

import { firebaseReducer } from 'react-redux-firebase'
import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { firestoreReducer, createFirestoreInstance } from 'redux-firestore'
import firebase from '../config/firebase'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  isInitializingReducer: true,
}

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

export default store

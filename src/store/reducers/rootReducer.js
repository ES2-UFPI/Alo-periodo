// rootReducer que irá combinar os outros Reducers
// passar a combinação para o createStore() do index.js

// os Reducers são funções que a Store chama sempre que uma Action chega

import authReducer from './authReducer'
import projectReducer from './projectReducer'

import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
 
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer

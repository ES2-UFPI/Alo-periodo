export const signIn = (credentials) => {

    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      
      firebase.auth().signInWithEmailAndPassword(
        
        credentials.email,
        credentials.password

      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }

export const signUp = (newUser) => { // criação de um novo Universitário
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    
      ).then((resp) => {
      return firestore.collection('users').doc(resp.user.uid).set({ // coleção users do banco FB
        // dados da tabela users...
        
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
    
    }).then(() => { // ok, tudo certo => adicionado na tabela users do banco FB
      dispatch({ type: 'SIGNUP_SUCCESS' })
    
    }).catch(err => { // tratamento do erro de signup
      dispatch({ type: 'SIGNUP_ERROR', err })
    })
  }
}
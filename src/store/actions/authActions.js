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

export const redefinePassword = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    const email = getState().firebase.auth.email; // Pega o email referente ao usuario para q ele possa redefinir sua senha
//    console.log("Teste " + emailTest);
    
    firebase.auth().sendPasswordResetEmail(email).then(() => {  // Envia email de redefinicao de senha ao usuario
      dispatch({ type: 'EMAIL_SENT' })
        alert("Verifique seu email!");
    }).catch((err) => {
      dispatch({ type: 'EMAIL_ERROR', err });
    });
  }
}

export const showProfile = () => {

  render() {
    return (dispatch,
      getState,
      {getFirebase}
      ) => {
      const firebase = getFirebase();

      const nomeFull = getState().firebase.profile.firstName + " " + getState().firebase.profile.lastName;
      const email = getState().firebase.auth.email;

      <div className="container">
        <form className="white">
          <h5 className="blue-grey-text text-darken-3">Profile</h5>
          <div className="input-field">
            <label htmlFor="nome"> {nomeFull} </label>
          </div>
          <div className="input-field">
            <label htmlFor="email"> {email} </label>
          </div>
        </form>
      </div>
    };
  }
}
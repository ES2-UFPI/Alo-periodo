// Action para salvar no Firestore o projeto que foi criado
// Nele também deve salvar o Universitário que o criou
import { storage } from '../../config/fbConfig'

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
      
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      const storageRef = storage.ref();
      
      firestore.collection('projects').add({

        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
        file: 'arquivo',
        loaded: 0,
        selectedFile: ''
        // definir aqui o que vai ser salvo la no projects do Firebase

      }).then(() => {
        
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      
    }).catch(err => {
        
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });

    }
  };
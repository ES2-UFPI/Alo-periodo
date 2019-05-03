// Action para salvar no Firestore o projeto que foi criado
// Nele também deve salvar o Universitário que o criou

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
      
      const firestore = getFirestore();
      // definir ... .getState()...
      
      firestore.collection('projects').add({

        ...project,
        authorFirstName: 'Hilderlan',
        authorLastName: 'Almeida',
        authorId: 10101010,
        createdAt: new Date(),

      }).then(() => {
        
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      
    }).catch(err => {
        
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });

    }
  };
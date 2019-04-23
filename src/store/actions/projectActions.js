export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
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
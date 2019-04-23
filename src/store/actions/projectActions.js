export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      firestore.collection('projects').add({

        ...project,
        authorFirstName: 'Mateus',
        authorLastName: 'Tito',
        authorId: 202020,
        createdAt: new Date(),

      }).then(() => {
        
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      
    }).catch(err => {
        
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
    }
  };
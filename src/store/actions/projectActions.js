// ações do Projeto que são chamadas na CreateProject.js
// obtenção do estado e disparar pro banco de dados

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        // chamada do método assíncrono (Async) para o banco de dados
        // disparado pelo projectReducer.js

        const firestore = getFirestore();
        firestore.collection('projects').add({

            ...project,
            authorFirstName: 'Mateus',
            authorLastName: 'Tito',
            authorId: 202020,
            createdAt: new Date()

        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
            
        }).catch((erro) => {
            dispatch({ type: 'CREATE_PROJECT_ERRO', erro });
        })

    }
}
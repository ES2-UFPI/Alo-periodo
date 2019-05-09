const initState = {}

const projectReducer = (state = initState, action) => {
  
  switch (action.type) {
    
    case 'CREATE_PROJECT_SUCCESS':
      console.log('Projeto criado com sucesso!');
      return state;
    
    case 'CREATE_PROJECT_ERROR':
      console.log('ERRO ao criar projeto...');
      return state;
    
    default:
      return state;
  }
};

export default projectReducer;
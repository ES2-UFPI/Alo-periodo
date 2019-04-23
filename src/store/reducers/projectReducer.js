const initState = {
  projects: [
    {id: '1', title: 'Redes de Computadores', content: 'Atividade 01 - Camada de Transporte'},
    {id: '2', title: 'Inteligência Artificial', content: 'Redes Neurais'},
    {id: '3', title: 'Engenharia de Software', content: 'Projeto Scrum'}
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
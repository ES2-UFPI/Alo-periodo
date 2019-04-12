// Redux está controlando o estado da aplicação
// Informações devem ser integradas com um Banco de Dados

// Mostrar aqui os dados reais provenientes do banco de dados
const initState = {
    projects:[
        {id:'1', title:'Eng de Software 2', content:'trabalho2019-1'},
        {id:'2', title:'Inteligencia Artificial', content:'trabalho2018-2'},
        {id:'3', title:'Redes de Computadores', content:'trabalho2018-1'}
    ]
}

// Reducer-Redux do Projeto, ou seja, controla a ação que será executada
// os Reducers são funções que a Store chama sempre que uma Action chega

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT': // identificador do projectAction.js
            console.log('created project', action.project)
            return state

        case 'CREATE_PROJECT_ERRO': // deu erro
            console.log('create project erro', action.erro);
            return state
            
        default:
            return state
    }
}

export default projectReducer
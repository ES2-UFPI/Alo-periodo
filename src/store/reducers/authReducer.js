const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){

    // Mensagens de aviso ao usuario
    case 'LOGIN_ERROR':
      console.log('Login Error');
      return {
        ...state,
        authError: 'Desculpe, isso não funcionou: Login Failed'
      }

    case 'LOGIN_SUCCESS':
      console.log('Login Success');
      return {
        authError: null
      }

    case 'SIGNOUT_SUCCESS':
      console.log('Signout Success');
      return state
    
    case 'SIGNUP_SUCCESS':
      console.log('SignUp Success');
      return {
        ...state,
        authError: null // ok, sem erros => salvo na tabela users do FB
      }

    case 'SIGNUP_ERROR':
      console.log('SignUp Error');
      return {
        ...state,
        authError: 'Desculpe, isso não funcionou: ' + action.err.message  // se o email ou senha não forem válidos, mostra a msg de erro
      }

    default:
      return state
  }
};

export default authReducer;
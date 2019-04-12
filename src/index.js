import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Uso dos Reducers-Redux e Store-Redux
// applyMiddleware --> redux-thux --> controle dos dispatcher (bd)
import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'

// Para a conexão, o App renderizará um Provider no nível superior, com tudo dentro dele
import { Provider } from 'react-redux'

// redux-thunk será um middleware para fazer o controle do banco de dados
import thunk from 'redux-thunk'

// importar as configurações do Redux-Firebase
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reactReduxFirebase(fbConfig),
      reduxFirestore(fbConfig)
    )
  );
// thunk - responsável pela interação com o banco de dados
// passa o FireBase como argumento pro thunk

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

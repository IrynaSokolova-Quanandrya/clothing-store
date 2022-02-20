import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider}  from "@apollo/client";
import './index.css';
import App from './App';
import { store, persistor } from "./redux/store";
import {client} from "./serviceApi"

console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <ApolloProvider client={client}>
      <PersistGate loading={null} persistor={persistor}>
         <App />
      </PersistGate>
     </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';
import {  store } from 'tasks/store';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
// import { PersistGate } from 'redux-persist/es/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
// оборачиваем BrowserRouter и App
      /* <PersistGate loading={null} persistor={persistor}> *  добавить persistor в импорт там где стор/} */
      /* </PersistGate>*/
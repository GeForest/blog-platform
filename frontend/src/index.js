import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react';
import {store, persistor} from './store/store'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

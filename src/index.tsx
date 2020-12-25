import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { counterSlice } from 'features/counter';
import { ChakraProvider } from '@chakra-ui/react';
import * as serviceWorker from 'serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import App from 'App';

const store = configureStore({ reducer: counterSlice.reducer });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();

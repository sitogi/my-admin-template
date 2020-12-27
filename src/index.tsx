import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { counterSlice } from 'features/counter';
import { ChakraProvider } from '@chakra-ui/react';
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { sidebarSlice } from 'features/sidebar';

const store = configureStore({
  reducer: combineReducers({
    counter: counterSlice.reducer,
    sidebar: sidebarSlice.reducer,
  }),
});

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

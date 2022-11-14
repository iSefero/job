// react
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

//chakra
import {ChakraProvider} from "@chakra-ui/react";

// common
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(
    <React.StrictMode>
      <ChakraProvider resetCSS={true}>
          <Provider store={store}>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </Provider>
      </ChakraProvider>
    </React.StrictMode>
);

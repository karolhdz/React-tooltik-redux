import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRoot} from "react-dom/client";

import { Provider } from 'react-redux';
import App from './App'
import './index.css'
import { PokemonApp } from './PokemonApp';

import { store } from './store/store';
import { TodoApp } from './TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp/>
    </Provider>
  </React.StrictMode>
)

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={ store }>
//       {/* <App /> */}
//       <PokemonApp />
//     </Provider>
//   </React.StrictMode>
// );
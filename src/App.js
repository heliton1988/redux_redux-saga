import React from 'react';
import { Provider } from 'react-redux';

import TodoList from './TodoList';

import store from './store';

import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <h1>Redux Saga</h1>
      <TodoList />
    </Provider>
  );
}

export default App;

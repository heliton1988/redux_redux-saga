import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo } from './store/modules/todo/actions';

export default function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todo);

  function addNewTodo() {
    dispatch(addTodo('Fazer caféee'));
  }

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <button type="button" onClick={addNewTodo}>Adicionar</button>
    </div>
  );
}
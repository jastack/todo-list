import React from 'react';
import ReactDOM from 'react-dom';

const TodoDetailView = ({todo, removeTodo}) => {
  if (todo.detail) {
    return <li>{todo.body}</li>;
  } else {
    return null;
  }
};

export default TodoDetailView;

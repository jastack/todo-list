import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form.jsx';

const TodoList = ({todos, removeTodo, receiveTodos, receiveTodo}) => (
  <div>
    <ul>
      {todos.map((todo, i) => <TodoListItem receiveTodo={receiveTodo} removeTodo={removeTodo} key={i} todo={todo}/>)}
    </ul>
    <TodoForm receiveTodo={receiveTodo}/>

  </div>
);

export default TodoList;

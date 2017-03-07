const allTodos = (todos) => (
  Object.keys(todos).map((id) => todos[id] )
);

const stepsByTodoId = (state, todoId) => {
  // Object.keys(state.todos[todoId]).map((id) => state.todos[todoId][id] )
  let result = [];
  for (let step in state.steps) {
    if (step.todo_id === todoId) {
      result.push(step);
    }
  }
  return result;
};

export default allTodos;

export function addTodo(text) {
  return {
    // this action will be listening on saga file
    type: '@todo/ASYNC_ADD_TODO',
    payload: {
      text,
    }
  }
}
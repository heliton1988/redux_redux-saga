export default function todo(state = [], action) {
  switch (action.type) {
    // Listening the action type that was dispatched on sagas file with response from fake API
    case '@todo/ADD_TODO':
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload.text,
        }
      ]
    default:
      return state;
  }
}
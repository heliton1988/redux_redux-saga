import { takeLatest, put, all, call, select } from 'redux-saga/effects'

// This function simulate the action of API call
function apiGet(text, count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text + ' da manhã ' + count);
    }, 2000);
  });
}

function* asyncAddTodo(action) {
  try {
    const todos = yield select(state => state.todo);

    // reponse getting from fake API
    const response = yield call(apiGet, action.payload.text, todos.length);

    // sending data to reducer file
    yield put({
      type: '@todo/ADD_TODO',
      payload: {
        text: response,
      }
    });
  } catch (err) {
    yield put('ERROR');
  }
}

export default function* root() {
  yield all([
    // listening the action that was dispatch on actions file
    takeLatest('@todo/ASYNC_ADD_TODO', asyncAddTodo),
  ]);
}
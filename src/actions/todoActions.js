import { AppDispatcher } from '../dispatcher/appDispatcher'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_FILTER = 'SET_FILTER'

let nextTodoId = 0;

export function addTodo(text) {
  AppDispatcher.dispatch ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
  });
}

export function removeTodo(id) {
  AppDispatcher.dispatch({
    type: REMOVE_TODO,
    id
  });
}

export function toggleTodo(id) {
  AppDispatcher.dispatch({
    type: TOGGLE_TODO,
    id
  });
}

export function setFilter(filter) {
  AppDispatcher.dispatch({
    type: SET_FILTER,
    filter
  })
};

import { AppDispatcher } from '../dispatcher/appDispatcher'

export const SET_FILTER = 'SET_FILTER'

let nextTodoId = 0;

export function setFilter(filter) {
  AppDispatcher.dispatch({
    type: SET_FILTER,
    filter
  })
};

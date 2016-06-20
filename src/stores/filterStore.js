import { SET_FILTER } from '../actions/filterActions';
import { AppDispatcher } from '../dispatcher/appDispatcher';
import { Store } from 'flux/utils';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';

class FilterStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this.activeFilter = SHOW_ALL;
  }

  getActiveFilter() {
    return this.activeFilter;
  }

  setActiveFilter(newFilter) {
    this.activeFilter = newFilter;
  }

  // Overriden method given by Flux library Store 
  __onDispatch (action) {

    switch(action.type) {

      case SET_FILTER:
        this.setActiveFilter(action.filter);
        this.__emitChange();
        break;
    }
  }
}

const instance = new FilterStore(AppDispatcher);
export default instance;
import { createStore } from 'redux';

const initState = {
  name: '123',
  age: '456'
}
const globalReducer = (state = initState, action) => {
  switch (action.type) {
    case 'Save':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

const store = createStore(globalReducer);
export default store;
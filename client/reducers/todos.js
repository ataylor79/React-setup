
const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO_SUCCESS':
      const { id, name, done } = action;
      return {
        id,
        name,
        done
      }

    case 'TOGGLE_TODO_SUCCESS':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, { done: action.done});

    case 'DELETE_TODO_SUCCESS':
       return state.id !== action.id;

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch(action.type) {

    case 'LOAD_TODO_SUCCESS':
      return action.data

    case 'ADD_TODO_SUCCESS':
      return [
        ...state,
        todo(undefined, action)
      ]

    case 'TOGGLE_TODO_SUCCESS':
      return state.map(t => todo(t, action))

    case 'DELETE_TODO_SUCCESS':
      return state.filter(t => todo(t, action))

    default:
      return state;
  }
}

export default todos;

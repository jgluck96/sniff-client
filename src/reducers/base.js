export default (state={}, action) => {
  switch (action.type) {
    case 'ADD_BASE':
      return action.payload;

    default:
      return state
  }

}

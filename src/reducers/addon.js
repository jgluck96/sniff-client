export default (state={}, action) => {
  switch (action.type) {
    case 'ADD_ADDON':
      return action.payload;

    default:
      return state
  }

}

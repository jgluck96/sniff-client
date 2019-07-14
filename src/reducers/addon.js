export default (state={}, action) => {
  switch (action.type) {
    case 'ADD_ADDON':
      return action.payload;
    case 'REMOVE_ADDON':
      return {};

    default:
      return state
  }

}

export default (state={}, action) => {
  switch (action.type) {
    case 'GUEST_INFO':
      return action.payload;

    default:
      return state
  }

}

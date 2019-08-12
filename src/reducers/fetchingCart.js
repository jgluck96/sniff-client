export default (state=true, action) => {
  switch (action.type) {
    case 'FETCHING_CART':
      return action.payload;

    default:
      return state
  }

}

export default (state=[], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
    const newState = [...state,action.payload]
      return newState.flat();
// state.concat(...action.payload)
    case 'REPLACE_CART':
      return action.payload;
// state.concat(...action.payload)
    default:
      return state
  }

}

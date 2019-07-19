export default (state=[], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
    console.log(state);
    const newState = [...state,action.payload]
      return newState.flat();
// state.concat(...action.payload)
    default:
      return state
  }

}

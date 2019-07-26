export default (state=[], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':

    const newState = [...state,action.payload]
    const sorted = newState.flat().sort((a,b) =>  -(b.id - a.id))
      return sorted;
// state.concat(...action.payload)
    case 'REPLACE_CART':
      const sortedR = action.payload.sort((a,b) =>  -(b.id - a.id))
      return sortedR;
// state.concat(...action.payload)
    default:
      return state
  }

}

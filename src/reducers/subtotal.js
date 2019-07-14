export default (state=0.00, action) => {
  switch (action.type) {
    case 'ADD_SUBTOTAL':
      return state+=action.payload;
    case 'REMOVE_SUBTOTAL':
      return state-=action.payload;
    case 'CLEAR_SUBTOTAL':
      return action.payload

    default:
      return state
  }
}

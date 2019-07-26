export default (state=false, action) => {
  switch (action.type) {
    case 'OPEN_PAYMENT':
      return action.payload;
    case 'CLOSE_PAYMENT':
      return action.payload;

    default:
      return state
  }
}

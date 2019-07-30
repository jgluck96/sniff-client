export default (state=false, action) => {
  switch (action.type) {
    case 'GUEST_CO':
      return action.payload;

    default:
      return state
  }

}

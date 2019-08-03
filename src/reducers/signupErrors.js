export default (state=false, action) => {
  switch (action.type) {
    case 'SIGNUP_ERRORS':
      return action.payload;

    default:
      return state
  }
}

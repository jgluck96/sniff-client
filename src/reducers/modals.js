export default (state={login: false, signup: false}, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN':
      return Object.assign({}, {login: action.payload, signup: false});
    case 'OPEN_SIGNUP':
      return Object.assign({}, {login: false, signup: action.payload});
    case 'CLOSE_MODAL':
      return Object.assign({}, {login: action.payload, signup: false});
    
    default:
      return state
  }

}

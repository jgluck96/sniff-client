export default (state={login: false, signup: false}, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN':
      return Object.assign({}, {login: action.payload, signup: false, miniBag: false});
    case 'OPEN_SIGNUP':
      return Object.assign({}, {login: false, signup: action.payload, miniBag: false});
    case 'OPEN_MINIBAG':
      return Object.assign({}, {login: false, signup: false, miniBag: true});
    case 'CLOSE_MODAL':
      return Object.assign({}, {login: action.payload, signup: false, miniBag: false});

    default:
      return state
  }

}

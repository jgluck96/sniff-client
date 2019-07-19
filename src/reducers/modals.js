export default (state={login: false, signup: false}, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN':
      return Object.assign({}, {login: action.payload, signup: false, miniBag: false, checkout: false});
    case 'OPEN_SIGNUP':
      return Object.assign({}, {login: false, signup: action.payload, miniBag: false, checkout: false});
    case 'OPEN_MINIBAG':
      return Object.assign({}, {login: false, signup: false, miniBag: action.payload, checkout: false});
    case 'OPEN_CHECKOUT':
      return Object.assign({}, {login: false, signup: false, miniBag: false, checkout: action.payload});
    case 'CLOSE_MODAL':
      return Object.assign({}, {login: action.payload, signup: false, miniBag: false, checkout: false});

    default:
      return state
  }

}

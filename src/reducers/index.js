import { combineReducers } from 'redux';
import base from './base'
import frag from './frag'
import addon from './addon'
import modals from './modals'
import subtotal from './subtotal'
import cart from './cart'
import fetchingCart from './fetchingCart'
import user from './userReducer'
import checkout from './checkout'
import guestco from './guestco'
import guestinfo from './guestinfo'
import signupErrors from './signupErrors'


export default combineReducers({
  base,
  frag,
  addon,
  modals,
  subtotal,
  fetchingCart,
  cart,
  user,
  checkout,
  guestco,
  guestinfo,
  signupErrors
})

// reducer example:
// export default (state = null, action) => {
//   switch (action.type) {
//     case 'FALSE_NOTIFS':
//       return action.payload
//
//     default:
//       return state
//   }
// }

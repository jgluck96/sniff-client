import { combineReducers } from 'redux';
import base from './base'
import frag from './frag'
import addon from './addon'
import modals from './modals'
import subtotal from './subtotal'
import cart from './cart'
import user from './userReducer'
import checkout from './checkout'
import guestco from './guestco'
import guestinfo from './guestinfo'


export default combineReducers({
  base,
  frag,
  addon,
  modals,
  subtotal,
  cart,
  user,
  checkout,
  guestco,
  guestinfo
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

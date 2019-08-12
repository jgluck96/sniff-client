export const addBase = (selection) => {
  return {
    type: 'ADD_BASE',
    payload: selection
  }
}

export const addFrag = (selection, count) => {
  return {
    type: count === 1 ? 'ADD_FRAG1' : count === 2 ? 'ADD_FRAG2' : 'ADD_FRAG3',
    payload: selection,
    count: count
  }
}

export const removeFrag = (selection) => {
  return {
    type: selection === 'frag1' ? 'REMOVE_FRAG1' : selection === 'frag2' ? 'REMOVE_FRAG2' : 'REMOVE_FRAG3',
    payload: selection
    }
}

export const clearFrags = () => {
  return {
    type: 'CLEAR_FRAGS',
    payload: {}
    }
}

export const addAddon = (selection) => {
  return {
    type: 'ADD_ADDON',
    payload: selection
  }
}

export const removeAddon = (selection) => {
  return {
    type: 'REMOVE_ADDON',
    payload: selection
  }
}

export const addSubtotal = (amount) => {
  return {
    type: 'ADD_SUBTOTAL',
    payload: amount
  }
}
export const clearSubtotal = (amount) => {
  return {
    type: 'CLEAR_SUBTOTAL',
    payload: amount
  }
}

export const removeSubtotal = (amount) => {
  return {
    type: 'REMOVE_SUBTOTAL',
    payload: amount
  }
}

export const addToCart = (cartItem) => {
  return {
    type: 'ADD_TO_CART',
    payload: cartItem,
  }
}

export const replaceCart = (newItems) => {
  return {
    type: 'REPLACE_CART',
    payload: newItems,
  }
}

export const fetchingCart = () => {
  return {
    type: 'FETCHING_CART',
    payload: true,
  }
}



export const fetchCart = (userId) => {
  return (dispatch) => {
    fetch('http://localhost:3000/carts')
    .then(res => res.json())
    .then(carts => {
      const myCart = carts.filter(cart => cart.user_id === userId)
      // const mySoaps = myRentals.filter(rental => rental.status === 'expiring')
      dispatch({type: 'REPLACE_CART', payload: myCart[0].soaps})
      dispatch({type: 'FETCHING_CART', payload: false})
    })
  }
}


export const signmeUp = (user, cart) => {
  return dispatch => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        "Accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        user: user
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.token) {
          localStorage.setItem('token', data.token)
          dispatch({
            type: 'SIGNME_UP',
            payload: data.user
          })
          if (cart.length > 0) {
            // const localSoap = JSON.parse(localStorage.getItem('recentlyAdded'))
            console.log(cart);
            cart.map(localsoap => {
              fetch('http://localhost:3000/soaps', {
                method: 'POST',
                headers: {
                  'Accepts': 'application/json',
                  'Content-type': 'application/json'
                },
                body: JSON.stringify({
                  base: localsoap.base,
                  fragrance1: localsoap.fragrance1,
                  fragrance2: localsoap.fragrance2,
                  fragrance3: localsoap.fragrance3,
                  addon: localsoap.addon,
                  quantity: localsoap.quantity,
                  price: localsoap.price,
                  user_id: data.user.id,
                  cart_id: data.user.cart.id
                })
              })
            })
          }
        } else {
          console.log(data);
          // dispatch({
          //   type: '',
          //   payload: data.errors
          // })
        }
      })
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT',
    payload: ''
  }
}

export const login = (user) => {
  return {
    type: 'LOGIN',
    payload: user
  }
}

export const autoLogin = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/auto_login', {
      headers: {
        'Authorization': localStorage.getItem('token')
      },
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.errors) {
        alert(data.errors)
      } else {
        // console.log('hhh');
        dispatch({ type: 'LOGIN', payload: data.user })
        // dispatch({type: 'ADD_TO_CART', payload: data.user.cart.soaps})
        // fetchCart(data.user.id)
        // fetch('http://localhost:3000/carts')
        // .then(res => res.json())
        // .then(carts => {
        //   const myCart = carts.filter(cart => cart.user_id === data.user.id)
        //   // const mySoaps = myRentals.filter(rental => rental.status === 'expiring')
        //   dispatch({type: 'ADD_TO_CART', payload: myCart[0].soaps})
        // })
      }
    })
  }
}

 const fetchCart = (userId) => {
  // console.log(userId);
  return (dispatch) => {
    fetch('http://localhost:3000/carts')
    .then(res => res.json())
    .then(carts => {
      const myCart = carts.filter(cart => cart.user_id === userId)
      // const mySoaps = myRentals.filter(rental => rental.status === 'expiring')
      dispatch({type: 'ADD_TO_CART', payload: myCart[0].soaps})
    })
  }
}

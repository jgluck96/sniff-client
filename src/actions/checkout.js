export const openPaymentPage = () => {
  return {
    type: 'OPEN_PAYMENT',
    payload: true
    }
}

export const closePaymentPage = () => {
  return {
    type: 'CLOSE_PAYMENT',
    payload: false
    }
}

export const guestCo = (bool) => {
  return {
    type: 'GUEST_CO',
    payload: bool
    }
}

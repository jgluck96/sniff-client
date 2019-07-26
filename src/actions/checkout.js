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

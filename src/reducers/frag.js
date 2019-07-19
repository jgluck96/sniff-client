export default (state={}, action) => {
  console.log(state);
  const newState = state
  switch (action.type) {
    case 'ADD_FRAG1':
      return Object.assign({}, state, {frag1: action.payload})
    case 'ADD_FRAG2':
      return Object.assign({}, state, {frag2: action.payload})
    case 'ADD_FRAG3':
      return Object.assign({}, state, {frag3: action.payload})
    case 'REMOVE_FRAG1':
      if (newState['frag2'] && newState['frag3'] === undefined) {
        newState['frag1'] = newState['frag2']
        delete newState['frag2']
      } else if (newState['frag2'] && newState['frag3']) {
          newState['frag1'] = newState['frag2']
          newState['frag2'] = newState['frag3']
          delete newState['frag3']
      } else {
          delete newState['frag1']
      }
      // const deletionFrag1 = delete newState['frag1']
      return Object.assign({}, newState)
    case 'REMOVE_FRAG2':
      if (newState['frag3']) {
        newState['frag2'] = newState['frag3']
        delete newState['frag3']
      } else {
        delete newState['frag2']
      }
      // const deletionFrag2 = delete state['frag2']
      return Object.assign({}, newState)
    case 'REMOVE_FRAG3':
      // const deletionFrag3 = delete state['frag3']
      delete newState['frag3']
      return Object.assign({}, newState)
    case 'CLEAR_FRAGS':
      return {}

    default:
      return state
  }

}

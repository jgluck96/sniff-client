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

export const addAddon = (selection) => {
  return {
    type: 'ADD_ADDON',
    payload: selection
  }
}

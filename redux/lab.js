
let combineReducers = (config) => {
  return (state = {}, action) => {
    let newState = {}
    for (let key of config) {
      newState[key] = config[key](state[key], action)
    }
    return newState
  }
}
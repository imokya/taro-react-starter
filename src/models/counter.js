const INIT_STATE = {
  count: 0
}

export default {
  namespace: 'counter',
  state: { ...INIT_STATE },
  reducers: {
    increment(state) {
      console.log('increment')
      return {
        ...state,
        count: state.count + 1
      }
    },
    decrement(state) {
      console.log('decrement')
      return {
        ...state,
        count: state.count - 1
      }
    }
  },
  effects: {}
}

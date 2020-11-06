export default {
  namespace: 'auth',
  state: {
    userInfo: null
  },
  reducers: {
    editUserInfo(state, action) {
      return {
        ...state,
        userInfo: action.payload,
      }
    }
  }
}
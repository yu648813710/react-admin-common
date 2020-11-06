import { request } from 'umi';
export default {
  namespace: 'list',
  state: {
    listData: null
  },
  effects: {
    *fetchList(active, fn) {
      const data = yield request('/api/user');
      yield fn.put({ type: 'editListData', payload: data });
    }
  },
  reducers: {
    editListData(state, action) {
      return {
        ...state,
        listData: action.payload,
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // return history.listen(({ pathname, query }) => {
      //   if (pathname === '/list') {
      //     // 这里dispatch了一个effects要在effects中定义
          
      //   }
      // });
      dispatch({
        type: 'fetchList',
        payload: 1,
      })
    }
  }
}
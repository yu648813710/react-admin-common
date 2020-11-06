import { Redirect, connect } from 'umi';
import React from 'react';
import Login from '@/pages/login';

 const Auth = (props) => {
  const { history: { location: { pathname } }, userInfo, dispatch } = props;
  const userInfoStore = localStorage.getItem('userInfo')
  if(userInfoStore&&!userInfo){
    dispatch({
      type: 'auth/editUserInfo',
      payload: JSON.parse(userInfoStore)
    })
  }
  // 登录页面没有登录状态
  if( pathname==='/login' && !userInfo ) {
    return <Login/>;
  }
  // 登录页面有登录状态
  if( pathname==='/login' && userInfo ) {
    return <Redirect to="/" />;
  }
  // 其他页面
  if (userInfo) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}
export default connect(({auth:{userInfo}})=>({userInfo}))(Auth);
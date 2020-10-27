import { Redirect } from 'umi';
import React from 'react';
const useAuth = () => {
  return {
    isLogin: false,
  }
};

export default (props) => {
  const { history: { location: { pathname } } } = props;
  const { isLogin } = useAuth();

  // 登录页面没有登录状态
  if( pathname==='/login' && !isLogin ) {
    return <div>{ props.children }</div>;
  }
  // 登录页面有登录状态
  if( pathname==='/login' && isLogin ) {
    return <Redirect to="/" />;
  }
  // 其他页面
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}
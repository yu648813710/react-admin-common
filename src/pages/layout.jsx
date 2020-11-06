import React from 'react';
import styles from './index.less';
import router from '@/router/index';
import { Menu } from 'antd';


const MenuCompontent = (routerItemData) => {
  if(routerItemData.routes) {
    return (
      <Menu.SubMenu key={routerItemData.name} title={routerItemData.name}>
        {routerItemData.routes.map(res => {
          return (MenuCompontent(res))
        })}
      </Menu.SubMenu>
    )
  }
  return (
    <Menu.Item key={routerItemData.path}>{routerItemData.name}</Menu.Item>
  )
};


export default props => {
  const menuData = router.routes[0].routes;
  const { history } = props;
  const menuClick = e => {
    history.push(e.keyPath[0]);
  };
  return (
    <div className={styles.pageCnter}>
      <div className={styles.pageLeft}>
        <div className={styles.pageLeftTop}>管理后台</div>
        <Menu onClick={menuClick} theme="dark" mode="inline">
          {menuData.map(res => (
            MenuCompontent(res)
          ))}
        </Menu>
      </div>
      <div className={styles.pageRight}>
        <div className={styles.pageTop}></div>
        <div className={styles.pageRightCenter}>{props.children}</div>
      </div>
    </div>
  );
};

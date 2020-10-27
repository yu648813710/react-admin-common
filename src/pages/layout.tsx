import React from 'react';
import styles from './index.less';

export default (props:any) => {
console.log("props", props)
  return (
    <div className={styles.pageCnter}>
      <div className={styles.pageLeft}>
        <div className={styles.pageLeftTop}>
          管理后台
        </div>
      </div>
      <div className={styles.pageRight}>
        <div className={styles.pageTop}></div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

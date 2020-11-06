import { useState, useEffect, useContext } from 'react';
import styles from './index.less';
import context from './context-mangan';
const bannerData = [1, 2, 3];
const Banner = prpos => {
  const { testContext } = context;
  const {value} = useContext(testContext);
  console.log('prpos', value);
  const [bannerNum, setBannerNum] = useState(0);
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
  }, [bannerNum]);
  const [previousTime, setPreviousTime] = useState(0);
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
  }, [previousTime]);
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    console.log('previousTime', 'previousTime');
    return () => {
      console.log('haha1?');
    };
  }, []);
  const leftClick = () => {
    let num = bannerNum;
    setBannerNum(num === 0 ? 2 : --num);
  };
  const rightClick = () => {
    let num = bannerNum;
    setBannerNum(num === bannerData.length - 1 ? 0 : ++num);
  };
  // 防抖函数
  const throttle = (fn, wait) => {
    let previous = previousTime;
    let now = Date.now();
    let context = this;
    let arg = arguments;
    if (now - previous > wait) {
      fn.apply(context, arg);
      setPreviousTime(now);
    }
  };
  return (
    <div className={styles.bannerBox}>
      <div
        className={styles.bannerCenter}
        style={{ width: bannerData.length * 800, left: bannerNum * -800 }}
      >
        {bannerData.map(res => (
          <div key={res} className={styles.item}>
            {res}
          </div>
        ))}
      </div>
      <div
        className={styles.button}
        onClick={() => {
          throttle(leftClick, 2000);
        }}
      ></div>
      <div
        className={[styles.button, styles.right].join(' ')}
        onClick={() => {
          throttle(rightClick, 2000);
        }}
      ></div>
      <div className={styles.flexBox}>
        <div className={[styles.item, styles.one].join(' ')}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
      </div>
    </div>
  );
};
export default Banner;

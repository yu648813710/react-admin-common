import React, { useState, useEffect } from 'react';
function HooksCompinentUseEffect () {
  const [ count, setCount ] = useState(0)
  const [ size, setSize ] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onWindowResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }

  // useEffect 第一个参数为一个函数
  // 这里类似 componentDidount 和 componentDidUpdate
  useEffect(() => {
    document.title = count
  })

  // useEffect 第一个参数为一个函数，第二个参数为一个数组，只有数组的每一项都不变的情况下，userEffect()才不会执行
  // 这里类似 componentDidMount 和 componentWillUnmount
  useEffect(() => {
    window.addEventListener('resize', onWindowResize, false)
    // 回调函数在视图被销毁的时候触发，1.组件重渲染，2.组件被卸载
    return () => {
      window.removeEventListener('resize', onWindowResize, false)
    }
  },  [])
  return (
    <div>
      <button onClick={() => { setCount(count + 1)} }>
        HooksCompinentUseEffect Click Count ({count})
      </button>
      W: {size.width} | H: {size.height}
    </div> 
  )
}
export default HooksCompinentUseEffect;
import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import HooksCompinentUseEffect from './Num';
import Banner from './Banner';
import context from './context-mangan';
// 测试 context
const list = props => {
  console.log('list -> props', props);
  const { dispatch, listData } = props;
  const { testContext } = context;
  // dispatch({
  //   type: 'list/fetchList',
  //   payload: 1,
  // });
  return (
    <testContext.Provider value={{value:'hahdsajh'}}>
      <div>
        list 名称：{listData ? listData.name : ''}
        {/* {listData} */}
        <div>
          <HooksCompinentUseEffect />
        </div>
        <h1>banner</h1>
        <Banner />
      </div>
    </testContext.Provider>
  );
};
export default connect(({ list: { listData } }) => ({ listData }))(list);

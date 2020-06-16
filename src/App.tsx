import React, {
} from 'react';
import { Button } from 'antd';
import { setRetryTip } from './redux/saga/actions/common';
// 如果不用connect 高阶组件的话， 就要用下面这个hooks
// useSelector 获取全局状态的hooks
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const { retryTip } = useSelector((state: IState) => state.common);

  const handleTestReduxClick = () => {
    dispatch({
      type: 'TRIGGER',
      payload: [],
    });
  };

  console.log('retryTip----', retryTip);

  return (
    <div className="App">
      <Button type="primary" onClick={handleTestReduxClick}>测试ant</Button>
    </div>
  );
}

export default App;

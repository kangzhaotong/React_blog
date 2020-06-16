import React, {
} from 'react';
import { Button } from 'antd';
import { setRetryTip } from './redux/saga/actions/common';
import useActions from './hooks/useActions';
// 如果不用connect 高阶组件的话， 就要用下面这个hooks
// useSelector 获取全局状态的hooks
import { useSelector } from 'react-redux';

function App() {


  const { retryTip } = useSelector((state: IState) => state.common);

  const handleTestReduxClick = () => {

  };

  console.log('retryTip----', retryTip);

  return (
    <div className="App">
      <Button type="primary" onClick={handleTestReduxClick}>测试ant</Button>
    </div>
  );
}

export default App;

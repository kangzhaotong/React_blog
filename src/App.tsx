import React, {
} from 'react';
import { Button } from 'antd';
import { setRetryTip } from './redux/saga/actions/common';
import { loginAction, loginActionPromise } from './redux/saga/actions/user';
import useActions from './hooks/useActions';
// 如果不用connect 高阶组件的话， 就要用下面这个hooks
// useSelector 获取全局状态的hooks
import { useSelector, useDispatch } from 'react-redux';
import { SET_MENU } from './redux/thunk/actions/menu';
import { getMenuData } from './redux/thunk/thunks/menu';

function App() {

  const { retryTip } = useSelector((state: IState) => state.common);
  const actions = useActions({
    setRetryTip,
    loginAction,
    loginActionPromise,
    logOut: loginAction.logOut,
  });

  const dispatch = useDispatch();

  const handleTestReduxClick = () => {
    const action = getMenuData();
    console.log('App里的打印action---', action);
    dispatch(action);
  };


  return (
    <div className="App">
      <Button type="primary" onClick={handleTestReduxClick}>测试ant</Button>
    </div>
  );
}

export default App;

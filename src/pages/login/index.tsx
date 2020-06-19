/***
 * @auth: dmx
 * @time: 2020/6/19
 * @func: 登录组件
 ***/
import React, {memo} from 'react';
import useActions from '../../hooks/useActions';
import { loginAction } from '../../redux/saga/actions/user';
import ParticlesBg from 'particles-bg';
import LoginMain from './login-layout/LoginMain';

import './index.less';

interface IProps {

}

const Login: React.FC<IProps> = (props) => {

  const actions = useActions({
    loginAction,
  });

  return (
    <div className="login">
      <div className="login-layout">
        <div className='login-layout-header' />
        <LoginMain
          loading={false}
          fetch={actions.loginAction}
        />
        <div className='login-layout-footer' />
        {/*<ParticlesBg
          type="lines"
          bg
        />*/}
      </div>
    </div>
  );
};

export default memo(Login);
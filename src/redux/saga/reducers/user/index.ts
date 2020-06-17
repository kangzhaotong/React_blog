/***
 * @auth: dmx
 * @time: 2020/6/17
 * @func: user reducer
 ***/
import { loginAction } from '../../actions/user';

const initialStateSetter = {
  isLogin: false,
}

export default function (state = initialStateSetter, action: ActionParams) {

  switch (action.type) {
    case loginAction.SUCCESS: {
      console.log('登录成功', action.payload);
      return {
        ...state,
        isLogin: true,
      }
    }
    case loginAction.FAILURE: {
      console.log('登录出错了');
      return {
        ...state,
      }
    }

    default:
      return state;

  }

}
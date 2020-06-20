/***
 * @auth: dmx
 * @time: 2020/6/17
 * @func: user reducer
 ***/
import { loginAction } from '../../actions/user';

const initialStateSetter: IUser = {
  isLogin: false,
  loading: false,
}

export default function (state = initialStateSetter, action: ActionParams) {

  switch (action.type) {
    case loginAction.TRIGGER: {
      return {
        ...state,
        loading: true,
      }
    }

    case loginAction.SUCCESS: {
      console.log('登录成功', action.payload);
      return {
        ...state,
        isLogin: true,
      }
    }
    case loginAction.FAILURE: {
      console.log('登录出错了', action.payload);
      return {
        ...state,
        loading: false,
      }
    }

    case loginAction.FULFILL: {
      return {
        ...state,
        loading: false,
      }
    }

    default:
      return state;

  }

}
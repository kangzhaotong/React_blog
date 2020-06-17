/***
 * @auth: dmx
 * @time: 2020/6/17
 * @func:
 ***/
import { SET_MENU, ASYNC_SET_MENU } from '../../actions/menu';

const initialStateSetter = {

}
export default function (state = initialStateSetter, action: ActionParams) {
  switch (action.type) {
    case SET_MENU: {

      console.log('请求我收到了', action.payload);

      return {
        ...state,
      }
    }
    case ASYNC_SET_MENU: {
      console.log('我收到了异步请求', action);
      return {
        ...state,
      }
    }

    default:
      return state;

  }
}
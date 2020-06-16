/***
 * @auth: dmx
 * @time: 2020/6/15
 * @func: store
 *
 * 1, reducer, [initialState], [enhancer]
 * thunk 明天配置
 ***/
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga/sagas';

// saga 的中间件
const sagaMiddleware = createSagaMiddleware();

// 创建一个增强器函数
// 大家不必要非要完全理解这段代码，主要是在逻辑上
const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(rootReducer, composeEnhancer(
  applyMiddleware(
    sagaMiddleware,
  ),
));

sagaMiddleware.run(rootSaga);


export default store;
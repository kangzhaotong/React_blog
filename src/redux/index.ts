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
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducer';
import rootSaga from './saga/sagas';

/*
* thunk 的原理
* 实际上thunk中间件会做一个判断
* 如果传进来的action是一个函数，并且向下传递被包装过后的dispatch
* 如果不是一个函数，就直接传递最初的dispatch
* */


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
    thunk,
    logger,
  ),
));

sagaMiddleware.run(rootSaga);


export default store;
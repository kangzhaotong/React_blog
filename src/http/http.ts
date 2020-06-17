/***
 * @auth: dmx
 * @time: 2020/6/18
 * @func: 基于axios 二次封装
 ***/
import AxiosInstance, { AxiosStatic, AxiosPromise } from "axios";
import { message, notification } from 'antd';
import { setRetryTip } from '../redux/saga/actions/common';
import store from '../redux';
import LocalStore from '../utils/LocalStore';

// 定义一个请求的参数类型声明
type requestFn = (url: string, params?: Object, data?: Object | null) => AxiosPromise;

class Http {

  /*
  * 说明一下为什么要用 AxiosInstance 而不用 axios.create()这种方式
  * 可能将来咱么这个项目要扩展，需要请求另一个网站的数据
  * 比如 需要请求 baidu.com，又需要请求tencent.com
  * 那么就有一个问题，axios.create()创建的对象，baseUrl有且只有一个，也就是说只可以指定一个
  * 如果制定了百度的  就不能在指定腾讯的 指定了也不起作用
  * AxiosInstance 他就是为了解决这个问题
  * */

  // 请求对象
  private axios: AxiosStatic = AxiosInstance;
  // 请求失败时的 重试请求的间隔时间
  private retryDelay: number = 1000;
  // 重试的次数
  // 一般来说，生产环境10次  开发环境4次 （但不是绝对，根据自己需要）
  private retry: number = Number(process.env.REACT_APP_RETRY) || 4;

  // 在constructor里面进行初始化设置
  constructor () {
    const { axios } = this;
    axios.defaults.timeout = 10000;
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.defaults.headers = {
      "Content-Type": 'application/json;charset=UTF-8',
    }

    // 去执行 请求拦截器 和 响应拦截器
    this.useInterceptResponse();
    this.useInterceptRequest();
  }

  // 响应拦截器
  useInterceptResponse () {

  }

  // 请求拦截器
  useInterceptRequest () {

  }







  // 封装一个底层的公用方法
  /*
  * type: 请求的方式 GET POST 。。。
  * url: 请求的地址
  * options: 请求的参数
  * isComplex： 是否平铺 参数 一般用于get但不是绝对
  * isComplex---> eg: {a:1,b:2} isComplex为true 时会转换为 a=1&b=2这种格式
  * */
  private fetchData (type: string, url: string, options?: Object, isComplex?: boolean) {
    if( isComplex ) {
      return this.axios[type](url, null, options);
    }

    return this.axios[type](url, options);
  }

}
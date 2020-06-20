/***
 * @auth: dmx
 * @time: 2020/6/19
 * @func: 登录表单的实现
 ***/
import React, {
  memo,
} from 'react';
import { Form, Button, Input, notification } from 'antd';

interface IProps {
  fetch: (values: ILogin) => void;
  loading: boolean;
}

const { Item } = Form;
const LoginMain: React.FC<IProps> = (props) => {

  const { loading, fetch } = props;

  // values 是咱们这个表单的数据集合
  // 加入要给 某个表单项赋予初始值，就需要给它传递一个参数initialValues
  // 接受一个对象 键名就是 Item里边定义的name
  const handleLogin = ( values: any ) => {
    if( !values.username || !values.password ) {
      notification.warn({
        message: '验证失败',
        description: '用户名或密码错误',
      })
    } else {
      // 执行登录的逻辑
      // 希望成功登录 使用这个加密过后的密码
      // 51059a4712331fa67d5ea10854b477a6
      fetch(values);
    }

  };

  return (
    <div className="login-layout-main">
      <div className='main-form'>
        <h2>欢迎登录react_blog</h2>
        <Form
          className="main-form-box"
          onFinish={handleLogin}
        >
          <Item name="username">
            <Input placeholder="请输入用户名" />
          </Item>
          <Item name="password">
            <Input type="password" placeholder="请输入密码" />
          </Item>
          <Item>
            <Button
              type="primary"
              className="main-form-box_button"
              htmlType="submit"
              loading={loading}
            >
              登录
            </Button>
          </Item>
          <Item>
            <div className="main-form-box_other">
              <p>其他登录方式</p>
              <div className='any'>
                <span>QQ</span>
                <span>微信</span>
                <span>GitHub</span>
              </div>
            </div>
          </Item>
        </Form>
      </div>
    </div>
  );
};

export default memo(LoginMain);
/***
 * @auth: dmx
 * @time: 2020/6/20
 * @func: 布局文件入口
 ***/
import React, {memo} from 'react';

interface IProps {

}

const BlogLayout: React.FC<IProps> = (props) => {

  return (
    <div>
      我是布局组件
    </div>
  );
};

export default memo(BlogLayout);
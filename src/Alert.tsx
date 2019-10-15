import t from 'prop-types';
import React from 'react';
import './Alert.less';
import { IAlert } from './type';

class Alert extends React.Component<IAlert, any> {
  static propTypes = {
    kind: t.oneOf(['info', 'error', 'success', 'warning'])
  };

  static defaultProps = {
    kind: 'info'
  };

  render() {
    const { children, kind, ...rest } = this.props;
    // 类型最好使用clssnames 这个库进行处理 此处只作示例
    const cls = `alert alert__${kind}`;
    return (
      <div className={cls} {...rest}>
        {children}
      </div>
    );
  }
}

export default Alert;

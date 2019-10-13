/**
 * 组件源码
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IHello } from './type';
import './style.less';

class Hello extends React.Component<IHello, any> {
  static propTypes = {
    name: PropTypes.string
  };

  static defaultProps = {
    name: 'iris'
  };

  render() {
    return <div>welcome, {this.props.name}</div>;
  }
}

// const Hello: React.FC<IHello> = ({ name='iris' }) => {
//   return <div>welcome, {name}</div>;
// };

export default Hello;

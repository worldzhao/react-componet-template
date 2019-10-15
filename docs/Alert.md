# Alert

## 何时使用

当某个页面需要向用户显示警告的信息时。

## API

| 属性 | 说明       | 类型                               | 默认值 |
| ---- | ---------- | ---------------------------------- | ------ |
| kind | Alert 类型 | 'info'/'error'/'warning'/'success' | 'info' |

## 代码演示

### 基本用法

```jsx
import React from 'react';
import Alert from '../src/Alert.tsx';

export default () => {
  return <Alert kind="info">Some message</Alert>;
};
```

### 四种样式

```jsx
import React from 'react';
import Alert from '../src/Alert.tsx';

/* 示例涉及一些逻辑操作可以使用类组件 控制state 使实例更生动*/
/* 暂不支持函数式组件内使用hooks */
export default class Demo extends React.Component {
  render() {
    return (
      <>
        <Alert kind="info">Some message</Alert>
        <Alert kind="error">Some message</Alert>
        <Alert kind="success">Some message</Alert>
        <Alert kind="warning">Some message</Alert>
      </>
    );
  }
}
```

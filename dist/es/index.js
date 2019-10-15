import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import t from 'prop-types';
import React from 'react';

var Alert =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, _getPrototypeOf(Alert).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          kind = _this$props.kind,
          rest = _objectWithoutProperties(_this$props, ["children", "kind"]); // 类型最好使用clssnames 这个库进行处理 此处只作示例


      var cls = "alert alert__".concat(kind);
      return React.createElement("div", _extends({
        className: cls
      }, rest), children);
    }
  }]);

  return Alert;
}(React.Component);

Alert.propTypes = {
  kind: t.oneOf(['info', 'error', 'success', 'warning'])
};
Alert.defaultProps = {
  kind: 'info'
};

export default Alert;

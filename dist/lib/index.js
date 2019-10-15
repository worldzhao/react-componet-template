'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _extends = _interopDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties = _interopDefault(require('@babel/runtime/helpers/objectWithoutProperties'));
var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/classCallCheck'));
var _createClass = _interopDefault(require('@babel/runtime/helpers/createClass'));
var _possibleConstructorReturn = _interopDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));
var _getPrototypeOf = _interopDefault(require('@babel/runtime/helpers/getPrototypeOf'));
var _inherits = _interopDefault(require('@babel/runtime/helpers/inherits'));
var t = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));

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

module.exports = Alert;

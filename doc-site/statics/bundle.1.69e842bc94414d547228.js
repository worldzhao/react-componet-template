(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{30:function(e,t,n){var r=n(44),a=(n(46),n(50)),o=(n(58),function(e){var t={exports:{}};e(t,t.exports);var n=t.exports.__esModule&&t.exports.default||t.exports;return"function"==typeof n?n:function(){return r.createElement("div",{},"Code snippet should export a component!")}}),l=o((function(e,t){t.__esModule=!0,t.default=void 0;var r=o(n(0)),a=o(n(43));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(a.default,{kind:"info"},"Some message")}})),c=o((function(e,t){t.__esModule=!0,t.default=void 0;var r=o(n(0)),a=o(n(43));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement(a.default,{kind:"info"},"Some message"),r.default.createElement(a.default,{kind:"error"},"Some message"),r.default.createElement(a.default,{kind:"success"},"Some message"),r.default.createElement(a.default,{kind:"warning"},"Some message"))},o}(r.default.Component);t.default=l})),s=function(){return r.createElement(r.Fragment,{},r.createElement("h1",{id:"alert",className:"react-demo-h1"},"Alert"),r.createElement("h2",{id:"何时使用",className:"react-demo-h2"},"何时使用"),r.createElement("p",{className:"react-demo-p"},"当某个页面需要向用户显示警告的信息时。"),r.createElement("h2",{id:"api",className:"react-demo-h2"},"API"),r.createElement("table",{className:"react-demo-table"},r.createElement("thead",{className:"react-demo-thead"},r.createElement("tr",{className:"react-demo-tr"},r.createElement("th",{align:null,className:"react-demo-th"},"属性"),r.createElement("th",{align:null,className:"react-demo-th"},"说明"),r.createElement("th",{align:null,className:"react-demo-th"},"类型"),r.createElement("th",{align:null,className:"react-demo-th"},"默认值"))),r.createElement("tbody",{className:"react-demo-tbody"},r.createElement("tr",{className:"react-demo-tr"},r.createElement("td",{align:null,className:"react-demo-td"},"kind"),r.createElement("td",{align:null,className:"react-demo-td"},"Alert 类型"),r.createElement("td",{align:null,className:"react-demo-td"},"'info'/'error'/'warning'/'success'"),r.createElement("td",{align:null,className:"react-demo-td"},"'info'")))),r.createElement("h2",{id:"代码演示",className:"react-demo-h2"},"代码演示"),r.createElement("h3",{id:"基本用法",className:"react-demo-h3"},"基本用法"),r.createElement(a,{code:"import React from 'react';\nimport Alert from '../src/Alert.tsx';\n\nexport default () => {\n  return <Alert kind=\"info\">Some message</Alert>;\n};\n",justCode:!1,lang:"jsx"},r.createElement(l,{})),r.createElement("h3",{id:"四种样式",className:"react-demo-h3"},"四种样式"),r.createElement(a,{code:'import React from \'react\';\nimport Alert from \'../src/Alert.tsx\';\n\n/* 示例涉及一些逻辑操作可以使用类组件 控制state 使实例更生动*/\n/* 暂不支持函数式组件内使用hooks */\nexport default class Demo extends React.Component {\n  render() {\n    return (\n      <>\n        <Alert kind="info">Some message</Alert>\n        <Alert kind="error">Some message</Alert>\n        <Alert kind="success">Some message</Alert>\n        <Alert kind="warning">Some message</Alert>\n      </>\n    );\n  }\n}\n',justCode:!1,lang:"jsx"},r.createElement(c,{})))};s.meta={username:"zhaozhiwen",email:null},e.exports=s},43:function(e,t,n){"use strict";n.r(t);var r,a=n(1),o=n.n(a),l=n(0),c=n.n(l),s=(n(62),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.kind,r=m(e,["children","kind"]),a="alert alert__"+n;return c.a.createElement("div",i({className:a},r),t)},t.propTypes={kind:o.a.oneOf(["info","error","success","warning"])},t.defaultProps={kind:"info"},t}(c.a.Component);t.default=d},53:function(e,t,n){var r={"./bash":36,"./bash.js":36,"./css":37,"./css.js":37,"./htmlbars":38,"./htmlbars.js":38,"./javascript":39,"./javascript.js":39,"./scss":40,"./scss.js":40,"./typescript":41,"./typescript.js":41};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=53},62:function(e,t,n){var r=n(63);"string"==typeof r&&(r=[[e.i,r,""]]);var a={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,a);r.locals&&(e.exports=r.locals)},63:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".alert {\n  color: red;\n}\n.alert__success {\n  color: #52c41a;\n}\n.alert__error {\n  color: #f5222d;\n}\n.alert__info {\n  color: #1890ff;\n}\n.alert__warning {\n  color: #faad14;\n}\n",""])}}]);
//# sourceMappingURL=bundle.1.69e842bc94414d547228.js.map
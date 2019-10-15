# react-component 模板

> react 单组件项目模板

Features:

1. 支持 typescript
2. 支持 less
3. 开发时调试兼文档编写
4. 支持 cjs/esm/umd 三种模块打包
5. 集成 eslint 以及 commitlint
6. 标准发布流程

Todo:

- [] 集成单元测试

## 基本命令

```bash
yarn dev # 启动项目

yarn build # 打包源文件以及文档
```

## 开发

相关命令：

```
yarn dev

# or

yarn start
```

基于[doc-scripts](https://github.com/janryWang/doc-scripts)进行文档以及开发时调试。

调试方式，在 docs 文件夹下编写 markdown 文件，jsx 代码块可直接被渲染，文档即示例。

注意：由于`doc-scripts`默认支持 typescript 以及 less，所以未做自定义配置，如自定义开发时配置可参见[doc-scripts](https://github.com/janryWang/doc-scripts)。

## 打包

相关命令：

```bash
yarn build
```

支持导出以下三种形式模块：

- commonjs
- ES Module。便于 tree shaking。
- umd。注意：该模块挂载在 window 下的变量名需要在`rollup.config.umd.js`中进行注入，默认为`RCDefaultName`

具体打包相关配置见`rollup.config.ts`以及`rollup.config.umd.js`。

## 发布

相关命令

```
yarn build
yarn release
yarn publish
git push --follow-tags origin master
```

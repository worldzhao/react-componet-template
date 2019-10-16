const { execute } = require('doc-scripts');
const path = require('path');

const getPath = relativePath => path.resolve(process.cwd(), path.resolve(__dirname, relativePath));

const options = {
  input: getPath('../docs'),
  output: getPath('../doc-site'),
  header: `<style>
            .site-body table td,
            .site-body table th {
              word-break: break-all;
            }
          </style>`
};

const webpackConfig = {
  devtool: false
};

execute('build', options, webpackConfig);

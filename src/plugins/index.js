import camelCase from "lodash-es";
const requireModule = require.context("./", false, /\.js$/); //
const data = [];

requireModule.keys().forEach(fileName => {
  if (fileName === "./index.js") return;
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));
  data[moduleName] = {
    ...requireModule(fileName).default
  };
});

export default data;
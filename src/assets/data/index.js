import camelCase from "lodash-es";
const requireModule = require.context("./", false, /\.js$/);
var data = [];

requireModule.keys().forEach(fileName => {
  if (fileName === "./index.js") return;
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));
  data.push (
    requireModule(fileName).category
  );

});

export default data;
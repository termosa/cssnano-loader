var path = require("path");

function loadFile(filePath) {
  return require(path.resolve(filePath));
}

module.exports = loadFile;

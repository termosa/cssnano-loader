function parseCss(css) {
  return css.slice(0, css.lastIndexOf("\n"));
}

function parseMap(css) {
  var match = css.match(/\/\*\#\s.*base64,(.*)\s\*\//);
  if (!match) return null;
  var jsonString = new Buffer(match[1], 'base64').toString('ascii');
  return JSON.parse(jsonString);
}

function parseCssnano(css) {
  return {
    css: parseCss(css),
    map: parseMap(css)
  };
}

module.exports = parseCssnano;

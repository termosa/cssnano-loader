var cssnanoLoader = function(source, map) {
  this.cacheable();
  this.callback(null, source, map);
};

module.exports = cssnanoLoader;

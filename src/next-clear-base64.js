(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var CHAR_COMMA = ',';

  nx.clearBase64 = function (inValue) {
    var index = inValue.indexOf(CHAR_COMMA);
    return inValue.substr(index + 1);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.clearBase64;
  }

}());

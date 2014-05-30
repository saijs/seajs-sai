
define("exports-error", [], function(require, exports, module){
  module.exports = function(){
    throw new Error("error in exports function.");
  };
});
define("factory-error", [], function(require, exports, module){
  throw new Error("error in factory.")
});

define(function(require, exports, module) {

  var test = require("../test");

  test.assert(typeof seajs)
});

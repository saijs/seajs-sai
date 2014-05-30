
function isFunction(object){
  return Object.prototype.toString.call(object) === "[object Function]";
}
function isObject(object){
  return Object.prototype.toString.call(object) === "[object Object]";
}

function catchError(){
  try{
    // TODO: function call context.
    return method.apply(this, arguments);
  }catch(ex){

    ex.file = module.id || ex.file; // || ex.sourceURL || ex.fileName;
    //ex.line = ex.line || ex.lineNumber;
    //ex.stack = ex.stack || ex.stacktrace;
    seajs.emit("error", ex);
    throw ex;
  }
}

seajs.on("exec", function(module){

  var exports = module.exports;
  var method;

  if(isFunction(exports)){
  }
  for(var key in exports){
    if(!exports.hasOwnProperty(key)){continue;}
    method = exports[key];
    if("function" !== typeof method){continue;}
    exports[key] = function(key, method){
      return catchError;
    }(key, method);
  }

});

seajs.on("define", function(meta){

  var fn = meta.factory;

  if(isFunction(fn)){
    meta.factory = catchError;
  }

});

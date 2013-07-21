/**
 * The Sea.js plugin for catch javascript exceptions.
 */
(function(seajs) {

  seajs.on("exec", function(module){
    var exports = module.exports;
    var method;
    for(var key in exports){
      if(!exports.hasOwnProperty(key)){continue;}
      method = exports[key];
      if("function" === typeof method){
        exports[key] = function(key, method){
          return function(){
            //return method.apply(this, arguments);
            try{
              return method.apply(this, arguments);
            }catch(ex){
              if(window.monitor){
                monitor.error(ex);
                // Hack 手段，避免这里已经 catch 住的异常被重新掷出后再度 catch。
                // window.onerror 中应该避免这个后缀的异常再度统计。
                // 部分浏览器在某些异常消息前会添加前缀。
                ex.message = ex.message + "[ERROR_CACHED]";
              }
              throw ex;
            }
          }
        }(key, method);
      }
    }
  });

  // Register as module
  define("seajs-monitor", [], {})

})(seajs);

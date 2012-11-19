VK_async = new (function () {
    functions = [];
    api_script_path = "http://userapi.com/js/api/openapi.js?48";

    this.ready = function (f){
        if(typeof(VK) === 'undefined') {
            functions.push(f);
        } else {
            f();
        }
    };

    this.setAPIScriptPath = function(path) {
        api_script_path = path;
    }

    this.init = function() {
        jQuery(function() {
            $.ajax({
              url: api_script_path,
              dataType: "script",
              success: function() {
                  for(var i=0;i<functions.length;i++) {
                      functions[i].call(window);
                  }
              }
            });
          });
    };

    var init = this.init;
    jQuery(function() {
        init();
    });
})();

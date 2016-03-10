(function ($) {


    var pluginName = "ajaxloader";


    $[pluginName] = function (element, options) {

        this.o = $.extend({}, {
            img: '',
            cssClass: '',
        }, options);


    };

    $[pluginName].prototype = {
        
    };

    $.fn[pluginName] = function (options) {

        return this.each(function () {
            if (undefined == $(this).data(pluginName)) {
                var plugin = new $[pluginName](this, options);
                $(this).data(pluginName, plugin);
            }
        });
    };

})(jQuery);
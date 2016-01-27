(function($) {


    var pluginName = "myPlugin";



    $[pluginName] = function(element, options) {

        var defaults = {
            foo: 'bar',
            onFoo: function() {}
        };

        var plugin = this;

        plugin.settings = {};

        var $el = $(element);

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
        };

        plugin.foo_public_method = function() {
            
        };

        var foo_private_method = function() {
            
        };

        plugin.init();

    };

    $.fn[pluginName] = function(options) {

        return this.each(function() {
            if (undefined == $(this).data(pluginName)) {
                var plugin = new $[pluginName](this, options);
                $(this).data(pluginName, plugin);
            }
        });

    };

})(jQuery);


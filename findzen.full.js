/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani, @findzen
 * Licensed under the MIT license
 */


// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other plugins 
// that are not closed properly.
;(function ( $, window, document, undefined ) {
  
  // undefined is used here as the undefined global 
  // variable in ECMAScript 3 and is mutable (i.e. it can 
  // be changed by someone else). undefined isn't really 
  // being passed in so we can ensure that its value is 
  // truly undefined. In ES5, undefined can no longer be 
  // modified.
  
  // window and document are passed through as local 
  // variables rather than as globals, because this (slightly) 
  // quickens the resolution process and can be more 
  // efficiently minified (especially when both are 
  // regularly referenced in your plugin).

  // Create the defaults once
  var pluginName = 'defaultPluginName',
    defaults = {
      propertyName: "value"
    };

  // The actual plugin constructor
  function Plugin( element, options ) {
    this.element = element;

    // jQuery has an extend method that merges the 
    // contents of two or more objects, storing the 
    // result in the first object. The first object 
    // is generally empty because we don't want to alter 
    // the default options for future instances of the plugin
    this.options = $.extend( {}, defaults, options) ;
    
    this._defaults = defaults;
    this._name = pluginName;
    
    this.init();
  }

  Plugin.prototype.init = function () {
    // Place initialization logic here
    // You already have access to the DOM element and
    // the options via the instance, e.g. this.element 
    // and this.options
  };

  // A really lightweight plugin wrapper around the constructor, 
  // preventing against multiple instantiations

  // Make the value of `pluginName` available as a jQuery plugin
  // that can be called like
  // `$('.selector').pluginName({ option: 'optional' })`
  $.fn[pluginName] = function ( options ) {
    // `$('.selector')` returns an array-like object of DOM elements
    // matching the provided selector.
    // This iterates over each of these elements
    // More info: http://api.jquery.com/jquery.each/
    return this.each(function () {
      // Within this closure, the value of `this` references
      // the current element in the above loop.
      // This conditional checks for the presence of jQuery data
      // stored under the key `plugin_pluginName`
      // More info: https://api.jquery.com/jQuery.data/
      // If false, the plugin has already been instantiated on this
      // element so we don't do anything.
      if (!$.data(this, 'plugin_' + pluginName)) {
        // Store the return value of `new Plugin( this, options )`
        // (an instance of the `Plugin` class) on the `jQuery.data`
        // key `plugin_pluginName`.
        // This means you can get a reference to your instance by
        // calling `$('.selector').data('pluginName')`
        $.data(this, 'plugin_' + pluginName, 
        new Plugin( this, options ));
      }
    });
  }

})( jQuery, window, document );
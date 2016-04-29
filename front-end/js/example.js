(function($) {
  // Define jQuery plugin
  $.fn.myPlugin = function myPluginDefinition(opts) {
    return plugin($(this), opts);
  };

  function plugin($element, opts) {
    opts = opts || {};

    // Keep track of your plugin name
    var PLUGIN_NAME = 'myPlugin';
    // Assign all your public API methods to a single object
    var api = {};

    // Pair methods with the API
    api.getName = getName;

    // Returning the element data assignment will link our API to the element while allowing chaining with other jQuery methods
    return $element.data(PLUGIN_NAME, api);

    // All inner functions will be hoisted to the top of the scope,
    // but placing them down here allows the business logic to be immediately readable in the plugin
    function getName() {
      return PLUGIN_NAME;
    }
  }
})(jQuery);

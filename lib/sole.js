(function($, window) {
	
	// Set-up namespace and any globals
	var sole = window.sole || {};
	
	/**
	* Page objects contain a module manifest, and a core controller for
	* those modules.
	* @constructor
	* @param {Object} customConfig Custom configuration object.
	*/
	sole.Page = function(customConfig) {
		this.manifest = new Array();
		this.config = {};
        
        if (customConfig) {
            $.extend(this.config, customConfig);
        }
		
		return this;
	};
	
	/**
	* Module objects provide configuration and management for distinct
	* areas within a page.
	* @constructor
	* @param {Object} customConfig Custom configuration object.
	*/
	sole.Module = function(customConfig) {
		this.config = {};
        
        if (customConfig) {
            $.extend(this.config, customConfig);
        }
		
		return this;
	};
	
	$.sole = window.sole = sole;
	
})(jQuery, window);
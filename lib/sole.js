(function($, window) {
	
	// Set-up namespace and any globals
	var sole = window.sole || {};
	
	/**
	* Page objects contain an array of manifest, and provide a core
	* controller for the page in general.
	* @constructor
	* @param {Object} customConfig Custom configuration object.
	*/
	sole.Page = function(customConfig) {
		this.manifests = new Array();
		this.config = {};
        
        if (customConfig) {
            $.extend(this.config, customConfig);
        }
		
		return this;
	};
	
	/**
	* Manifest objects provide a parent for sets of modules. A manifest of
	* modules associates sets of modules together.
	* @constructor
	* @param {Object} customConfig Custom configuration object.
	*/
	sole.Manifest = function(customConfig) {
		this.modules = new Array();
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